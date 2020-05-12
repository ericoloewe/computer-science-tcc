import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./auth";
import { SpotifyUtil, SpotifyPlayer } from "../utils/spotify";
import { Music } from "../@types/music";
import { MusicMapper } from "../mappers/music";

interface Props {}

interface Context {
  play: (musicId: string) => Promise<void>;
  playingMusicInfo?: PlayingMusicInfo;
  toggleFavorite: (musicId: string) => Promise<void>;
}

interface PlayingMusicInfo {
  position: number;
  duration: number;
  currentTrack: Music;
}

const MusicContext = createContext<Context>({} as any);

export function MusicProvider(props: Props) {
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
          track_window: { current_track },
        } = state;

        setPlayingMusicInfo({ currentTrack: MusicMapper.toMusicTrack(current_track), duration, position });
      });
    } // eslint-disable-next-line
  }, [player]);

  async function createSpotifyPlayerIfNeed() {
    const player = await SpotifyUtil.createPlayer(accessToken);

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

  async function toggleFavorite(musicId: string): Promise<void> {
    console.log("playing ", musicId);
  }

  return <MusicContext.Provider value={{ playingMusicInfo, play, toggleFavorite }} {...props} />;
}

export const useMusic = () => useContext<Context>(MusicContext);
