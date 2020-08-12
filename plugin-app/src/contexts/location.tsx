import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";
import { StringUtil } from "../utils/string";

export interface Location {
  id: string;
  name: string;
  createdDate?: string;
}

interface Props {}

interface Context {
  search: (text?: string) => Promise<Location[]>;
}

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/locations`;
const USE_API = process.env.REACT_APP_USE_API === "true";

const LocationContext = createContext({} as any);

export function LocationProvider(props: Props) {
  async function search(text?: string): Promise<Location[]> {
    return USE_API ? searchFromApi(text) : searchFromJson(text);
  }

  async function searchFromJson(text?: string): Promise<Location[]> {
    const { data } = await requestService.get<string[]>("/locations.json");

    return data
      .filter((l) => !text || l.toLowerCase().includes(text?.toLowerCase()))
      .map((l) => ({
        id: StringUtil.toKebabCase(l),
        name: l,
      }));
  }

  async function searchFromApi(text?: string): Promise<Location[]> {
    const { data } = await requestService.get<Location[]>({
      url: eventApiEndpoint,
      params: { text },
    });

    return data;
  }

  return <LocationContext.Provider value={{ search }} {...props} />;
}

export const useLocation = () => useContext<Context>(LocationContext);
