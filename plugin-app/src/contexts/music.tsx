import React, { createContext, useContext } from "react";

import { useAuth } from "./auth";

interface Props {}

interface Context {
  play: (musicId: string) => Promise<void>;
  toggleFavorite: (musicId: string) => Promise<void>;
}

const MusicContext = createContext<Context>({} as any);

export function MusicProvider(props: Props) {
  async function play(musicId: string): Promise<void> {
    console.log("playing ", musicId);
  }

  async function toggleFavorite(musicId: string): Promise<void> {
    console.log("playing ", musicId);
  }

  return <MusicContext.Provider value={{ play, toggleFavorite }} {...props} />;
}

export const useMusic = () => useContext<Context>(MusicContext);
