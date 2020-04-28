import React, { createContext, useContext } from "react";
import { useAuth } from "./auth";

import { SpotifyUtil } from "../utils/spotify";
import { PlaylistMapper } from "../mappers/playlist";
import { BasicPlaylist, Playlist } from "../services/playlist";
import { SpotifyLoadPlaylistResponse, SpotifyLoadUserPlaylistsResponse } from "../react-app-env";

interface Props {}

interface Context {
  loadAll: () => Promise<BasicPlaylist[]>;
  load: (id: string) => Promise<Playlist>;
}

const PlaylistContext = createContext({} as any);
const spotifyPlaylistsEndpoint = `${SpotifyUtil.getApiUrl()}/me/playlists`;
const spotifyLoadPlaylistEndpoint = `${SpotifyUtil.getApiUrl()}/playlists`;

export function PlaylistProvider(props: Props) {
  const { requestService } = useAuth();

  async function loadAll(): Promise<BasicPlaylist[]> {
    const { data } = await requestService.get<SpotifyLoadUserPlaylistsResponse>({
      url: spotifyPlaylistsEndpoint,
    });

    return data.items.map(PlaylistMapper.toBasicPlaylist);
  }

  async function load(id: string): Promise<Playlist> {
    const { data } = await requestService.get<SpotifyLoadPlaylistResponse>({
      url: `${spotifyLoadPlaylistEndpoint}/${id}`,
    });

    console.log(data);

    return PlaylistMapper.toPlaylist(data);
  }

  return <PlaylistContext.Provider value={{ load, loadAll }} {...props} />;
}

export const usePlaylist = () => useContext<Context>(PlaylistContext);
