import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";
import { StringUtil } from "../utils/string";

export interface Feeling {
  id: string;
  name: string;
  createdDate?: string;
}

export interface Activity {
  id: string;
  name: string;
  createdDate?: string;
}

export interface Location {
  id: string;
  name: string;
  createdDate?: string;
}

interface Props {}

interface Context {
  searchActivity: (text?: string) => Promise<Activity[]>;
  searchFeeling: (text?: string) => Promise<Feeling[]>;
  searchLocation: (text?: string) => Promise<Location[]>;
}

const USE_API = process.env.REACT_APP_USE_API_TO_LOAD_FEELINGS === "true";
const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const baseHost = process.env.REACT_APP_HOST_URL || "https://ericoloewe.github.io/computer-science-tcc";

const NewCtxContext = createContext({} as any);

export function NewContextProvider(props: Props) {
  async function searchActivity(text?: string): Promise<Activity[]> {
    return USE_API ? searchFromApi("activities", text) : searchFromJson("activities.json", text);
  }

  async function searchFeeling(text?: string): Promise<Feeling[]> {
    return USE_API ? searchFromApi("feeling", text) : searchFromJson("feelings.json", text);
  }

  async function searchLocation(text?: string): Promise<Feeling[]> {
    return USE_API ? searchFromApi("locations", text) : searchFromJson("locations.json", text);
  }

  async function searchFromJson(path: string, text?: string): Promise<any[]> {
    const { data } = await requestService.get<string[]>(`${baseHost}/${path}`);

    return data
      .filter((l) => !text || l.toLowerCase().includes(text?.toLowerCase()))
      .map((l) => ({
        id: StringUtil.toKebabCase(l),
        name: l,
      }));
  }

  async function searchFromApi(endpoint: string, text?: string): Promise<any[]> {
    const { data } = await requestService.get<any[]>({
      url: `${apiEndpoint}/${endpoint}`,
      params: { text },
    });

    return data;
  }

  return <NewCtxContext.Provider value={{ searchActivity, searchFeeling, searchLocation }} {...props} />;
}

export const useNewContext = () => useContext<Context>(NewCtxContext);
