import React, { createContext, useContext } from "react";
import { useAuth } from "./auth";

import { SpotifyUtil } from "../utils/spotify";
import { PlaylistMapper } from "../mappers/playlist";

interface Props {}

interface Context {
  loadAll: () => Promise<any[]>;
}

const PlaylistContext = createContext({} as any);
const spotifyPlaylistEndpoint = `${SpotifyUtil.getApiUrl()}/me/playlists`;

export function PlaylistProvider(props: Props) {
  const { requestService } = useAuth();

  async function loadAll(): Promise<any[]> {
    const { data } = await requestService.get<any>({
      url: spotifyPlaylistEndpoint,
    });

    return data.items.map(PlaylistMapper.toPlaylist);
  }

  return <PlaylistContext.Provider value={{ loadAll }} {...props} />;
}

export const usePlaylist = () => useContext<Context>(PlaylistContext);
