import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./auth";
import { SpotifyUtil, SpotifyPlayer } from "../utils/spotify";
import { Music } from "../@types/music";
import { MusicMapper } from "../mappers/music";
import { SpotifyPlayerResponse } from "../@types/spotify";
import { TimerUtil } from "../utils/timer";

interface Props {}

interface Context {
  isPlayerReady: boolean;
  isPluginPlayerActive: boolean;
  play: (musicId: string) => Promise<void>;
  playingMusicInfo?: PlayingMusicInfo;
  transferUserPlaybackToPlugin: () => Promise<void>;
}

export interface PlayingMusicInfo {
  position: number;
  duration: number;
  currentTrack: Music;
  paused: boolean;
}

const MusicContext = createContext<Context>({} as any);
const spotifyUserEndpoint = `${SpotifyUtil.getApiUrl()}/me`;

export function PlayerProvider(props: Props) {
  const { accessToken, isAuthenticated, requestService } = useAuth();
  const [player, setPlayer] = useState<SpotifyPlayer | null>(null);
  const [isPluginPlayerActive, setIsPluginPlayerActive] = useState<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState<any>(null);
  const [playingMusicInfo, setPlayingMusicInfo] = useState<PlayingMusicInfo | undefined>();

  useEffect(() => {
    if (isAuthenticated) {
      createSpotifyPlayerIfNeedAndValidatePlayer();
    } // eslint-disable-next-line
  }, [accessToken, isAuthenticated]);

  useEffect(() => {
    setIsPlayerReady(player != null);

    if (player != null) {
      player.original.addListener("player_state_changed", (state) => {
        const {
          position,
          duration,
          paused,
          track_window: { current_track },
        } = state;

        setPlayingMusicInfo({ currentTrack: MusicMapper.toMusicTrack(current_track), duration, position, paused });
      });
    } // eslint-disable-next-line
  }, [player]);

  async function createSpotifyPlayerIfNeed(): Promise<void> {
    const player = await SpotifyUtil.createPlayer(accessToken);

    setPlayer(player);
  }

  async function createSpotifyPlayerIfNeedAndValidatePlayer(): Promise<void> {
    await createSpotifyPlayerIfNeed();
    await loadCurrentPlayerInfo();
  }

  async function getCurrentPlayerInfo(): Promise<SpotifyPlayerResponse | null> {
    const { data } = await requestService.get<SpotifyPlayerResponse | null>(`${spotifyUserEndpoint}/player`);

    return data;
  }

  async function loadCurrentPlayerInfo(): Promise<void> {
    const currentPlayer = await getCurrentPlayerInfo();

    setIsPluginPlayerActive((currentPlayer?.device != null && player?.device_id) === currentPlayer?.device?.id);
  }

  async function play(spotifyUri: string): Promise<void> {
    if (player == null) {
      throw new Error("You have to login first!");
    }

    const spotifyPlaySongEndpoint = `${SpotifyUtil.getApiUrl()}/me/player/play?device_id=${player.device_id}`;

    requestService.put({
      url: spotifyPlaySongEndpoint,
      data: {
        uris: [spotifyUri],
      },
    });
  }

  async function transferUserPlaybackToPlugin(): Promise<void> {
    const endpoint = `${spotifyUserEndpoint}/player`;

    await requestService.put({
      url: endpoint,
      data: {
        device_ids: [player?.device_id],
      },
    });
    await TimerUtil.wait(500);
    await loadCurrentPlayerInfo();
  }

  return (
    <MusicContext.Provider
      value={{
        isPlayerReady,
        isPluginPlayerActive,
        play,
        playingMusicInfo,
        transferUserPlaybackToPlugin,
      }}
      {...props}
    />
  );
}

export const usePlayer = () => useContext<Context>(MusicContext);
