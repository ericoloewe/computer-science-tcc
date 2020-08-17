import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";
import { StringUtil } from "../utils/string";

export interface Activity {
  id: string;
  name: string;
  createdDate?: string;
}

interface Props {}

interface Context {
  search: (text?: string) => Promise<Activity[]>;
}

const USE_API = process.env.REACT_APP_USE_API_TO_LOAD_ACTIVITY === "true";
const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/activities`;
const baseHost = process.env.REACT_APP_HOST_URL || "https://ericoloewe.github.io/computer-science-tcc";

const ActivityContext = createContext({} as any);

export function ActivityProvider(props: Props) {
  async function search(text?: string): Promise<Activity[]> {
    return USE_API ? searchFromApi(text) : searchFromJson(text);
  }

  async function searchFromJson(text?: string): Promise<Activity[]> {
    const { data } = await requestService.get<string[]>(`${baseHost}/activities.json`);

    return data
      .filter((l) => !text || l.toLowerCase().includes(text?.toLowerCase()))
      .map((l) => ({
        id: StringUtil.toKebabCase(l),
        name: l,
      }));
  }

  async function searchFromApi(text?: string): Promise<Activity[]> {
    const { data } = await requestService.get<Activity[]>({
      url: eventApiEndpoint,
      params: { text },
    });

    return data;
  }

  return <ActivityContext.Provider value={{ search }} {...props} />;
}

export const useActivity = () => useContext<Context>(ActivityContext);
