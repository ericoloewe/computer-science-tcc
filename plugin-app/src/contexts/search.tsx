import React, { createContext, useContext } from "react";
import { useAuth } from "./auth";

import { TimerUtil } from "../utils/timer";
import { artistMock } from "../services/mocks";
import { SpotifyUtil } from "../utils/spotify";
import { SpotifySearchResponse } from "../react-app-env";
import { Artist } from "../services/artist";
import { SearchMapper } from "../mappers/search";

interface Props {}

interface Context {
  searchArtists: (text: string) => Promise<Artist[]>;
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

    return artists.items.map(SearchMapper.toArtist);
  }

  return <SearchContext.Provider value={{ search, searchArtists }} {...props} />;
}

export const useSearch = () => useContext<Context>(SearchContext);