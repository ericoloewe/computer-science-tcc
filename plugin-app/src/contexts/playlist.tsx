import React, { createContext, useContext } from "react";
import { useAuth } from "./auth";

import { SpotifyUtil } from "../utils/spotify";
import { PlaylistMapper } from "../mappers/playlist";
import { BasicPlaylist, Playlist } from "../@types/playlist";
import { SpotifyLoadPlaylistResponse, SpotifyLoadUserPlaylistsResponse } from "../@types/spotify";

interface Props {}

interface Context {
  loadAll: () => Promise<BasicPlaylist[]>;
  load: (id: string) => Promise<Playlist>;
  rename: (playlistId: string, newName: string) => Promise<void>;
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

    return PlaylistMapper.toPlaylist(data);
  }

  async function rename(playlistId: string, newName: string): Promise<void> {
    console.log("rename ", playlistId, newName);

    requestService.put({
      url: `${spotifyLoadPlaylistEndpoint}/${playlistId}`,
      data: {
        name: newName,
      },
    });
  }

  return <PlaylistContext.Provider value={{ load, loadAll, rename }} {...props} />;
}

export const usePlaylist = () => useContext<Context>(PlaylistContext);
