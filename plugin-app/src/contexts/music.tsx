import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./auth";
import { SpotifyUtil, SpotifyPlayer } from "../utils/spotify";

interface Props {}

interface Context {
  play: (musicId: string) => Promise<void>;
  toggleFavorite: (musicId: string) => Promise<void>;
}

const MusicContext = createContext<Context>({} as any);

export function MusicProvider(props: Props) {
  const { accessToken, isAuthenticated, requestService } = useAuth();
  const [player, setPlayer] = useState<SpotifyPlayer | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      createSpotifyPlayerIfNeed();
    } // eslint-disable-next-line
  }, [accessToken, isAuthenticated]);

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

  return <MusicContext.Provider value={{ play, toggleFavorite }} {...props} />;
}

export const useMusic = () => useContext<Context>(MusicContext);
