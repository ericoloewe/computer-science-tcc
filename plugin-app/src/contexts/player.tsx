import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./auth";
import { SpotifyUtil, SpotifyPlayer } from "../utils/spotify";
import { Music } from "../@types/music";
import { MusicMapper } from "../mappers/music";

interface Props {}

interface Context {
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
  const [playingMusicInfo, setPlayingMusicInfo] = useState<PlayingMusicInfo | undefined>();

  useEffect(() => {
    if (isAuthenticated) {
      createSpotifyPlayerIfNeed();
    } // eslint-disable-next-line
  }, [accessToken, isAuthenticated]);

  useEffect(() => {
    if (player != null) {
      player.original.addListener("player_state_changed", (state) => {
        const {
          position,
          duration,
          paused,
          track_window: { current_track },
        } = state;

        console.log("state", state);

        setPlayingMusicInfo({ currentTrack: MusicMapper.toMusicTrack(current_track), duration, position, paused });
      });
    } // eslint-disable-next-line
  }, [player]);

  async function createSpotifyPlayerIfNeed() {
    const player = await SpotifyUtil.createPlayer(accessToken);

    console.log("player", player);
    setPlayer(player);
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
    const endpoint1 = `${spotifyUserEndpoint}/player`;

    const { data: data2 } = await requestService.put<any>({
      url: endpoint1,
      data: {
        device_ids: [player?.device_id],
      },
    });
  }

  return <MusicContext.Provider value={{ playingMusicInfo, play, transferUserPlaybackToPlugin }} {...props} />;
}

export const usePlayer = () => useContext<Context>(MusicContext);
