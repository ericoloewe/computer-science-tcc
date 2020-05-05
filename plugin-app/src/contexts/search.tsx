import React, { createContext, useContext } from "react";

import { Artist } from "../services/artist";
import { SearchMapper } from "../mappers/search";
import { SpotifySearchResponse } from "../react-app-env";
import { SpotifyUtil } from "../utils/spotify";
import { useAuth } from "./auth";
import { Music } from "../services/music";

interface Props {}

interface Context {
  searchArtists: (text: string) => Promise<Artist[]>;
  searchMusic: (text: string) => Promise<Music[]>;
}

const SearchContext = createContext({} as any);
const spotifySearchEndpoint = `${SpotifyUtil.getApiUrl()}/search`;

type SpotifySearchType = "album" | "artist" | "playlist" | "track" | "show" | "episode";

export function SearchProvider(props: Props) {
  const { requestService } = useAuth();

  async function search(text: string, type: SpotifySearchType): Promise<SpotifySearchResponse> {
    const { data } = await requestService.get<SpotifySearchResponse>({
      url: spotifySearchEndpoint,
      params: { q: text, type },
    });

    return data;
  }

  async function searchArtists(text: string): Promise<Artist[]> {
    const { artists } = await search(text, "artist");

    if (!artists) {
      throw new Error("Invalid response");
    }

    return artists.items.map(SearchMapper.toArtist);
  }

  async function searchMusic(text: string): Promise<Music[]> {
    const { tracks } = await search(text, "track");

    if (!tracks) {
      throw new Error("Invalid response");
    }

    return tracks.items.map(SearchMapper.toMusic);
  }

  return <SearchContext.Provider value={{ searchArtists, searchMusic }} {...props} />;
}

export const useSearch = () => useContext<Context>(SearchContext);
