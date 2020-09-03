import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./auth";
import { SpotifyUtil, SpotifyPlayer } from "../utils/spotify";
import { Music } from "../@types/music";
import { MusicMapper } from "../mappers/music";
import { SpotifyPlayerResponse } from "../@types/spotify";
import { TimerUtil } from "../utils/timer";
import { PlayerUtil } from "../utils/player";
import { useEvents } from "./event";
import { messageService } from "../services/message";

interface Props {}

interface Context {
  isPlayerReady: boolean;
  isPluginPlayerActive: boolean;
  nextTrack: () => Promise<void>;
  playingMusicInfo?: PlayingMusicInfo;
  previousTrack: () => Promise<void>;
  togglePlay: () => Promise<void>;
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

const debounce = TimerUtil.debounce((state: Spotify.PlaybackState, saveEvent: Function) => {
  var { type, value } = PlayerUtil.stateToEvent(state);

  saveEvent(type, value);
}, 1000);

export function PlayerProvider(props: Props) {
  const { accessToken, isAuthenticated, requestService } = useAuth();
  const [player, setPlayer] = useState<SpotifyPlayer | null>(null);
  const [isPluginPlayerActive, setIsPluginPlayerActive] = useState<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState<any>(null);
  const [playingMusicInfo, setPlayingMusicInfo] = useState<PlayingMusicInfo | undefined>();
  const { save: saveEvent } = useEvents();

  useEffect(() => {
    if (isAuthenticated) {
      createSpotifyPlayerIfNeedAndValidatePlayer();
    } // eslint-disable-next-line
  }, [accessToken, isAuthenticated]);

  useEffect(() => {
    setIsPlayerReady(player != null);

    if (player != null) {
      player.original.addListener("player_state_changed", (state) => {
        if (state == null) {
          setIsPluginPlayerActive(false);
          messageService.alert("Você foi desconectado!");
        } else {
          const {
            position,
            duration,
            paused,
            track_window: { current_track },
          } = state;

          debounce(state, saveEvent);
          setPlayingMusicInfo({ currentTrack: MusicMapper.toMusicTrack(current_track), duration, position, paused });
        }
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

  async function nextTrack(): Promise<void> {
    if (player == null) {
      throw new Error("You have to login first!");
    }

    await player.original.nextTrack();
  }

  async function previousTrack(): Promise<void> {
    if (player == null) {
      throw new Error("You have to login first!");
    }

    await player.original.previousTrack();
  }

  async function togglePlay(): Promise<void> {
    if (player == null) {
      throw new Error("You have to login first!");
    }

    await player.original.togglePlay();
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
        nextTrack,
        playingMusicInfo,
        previousTrack,
        togglePlay,
        transferUserPlaybackToPlugin,
      }}
      {...props}
    />
  );
}

export const usePlayer = () => useContext<Context>(MusicContext);
