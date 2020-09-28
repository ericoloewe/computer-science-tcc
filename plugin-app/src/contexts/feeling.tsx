import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";
import { StringUtil } from "../utils/string";

export interface Feeling {
  id: string;
  name: string;
  createdDate?: string;
}

interface Props {}

interface Context {
  search: (text?: string) => Promise<Feeling[]>;
}

const USE_API = process.env.REACT_APP_USE_API_TO_LOAD_FEELINGS === "true";
const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/feelings`;
const baseHost = process.env.REACT_APP_HOST_URL || "https://ericoloewe.github.io/computer-science-tcc";

const FeelingContext = createContext({} as any);

export function FeelingProvider(props: Props) {
  async function search(text?: string): Promise<Feeling[]> {
    return USE_API ? searchFromApi(text) : searchFromJson(text);
  }

  async function searchFromJson(text?: string): Promise<Feeling[]> {
    const { data } = await requestService.get<string[]>(`${baseHost}/feelings.json`);

    return data
      .filter((l) => !text || l.toLowerCase().includes(text?.toLowerCase()))
      .map((l) => ({
        id: StringUtil.toKebabCase(l),
        name: l,
      }));
  }

  async function searchFromApi(text?: string): Promise<Feeling[]> {
    const { data } = await requestService.get<Feeling[]>({
      url: eventApiEndpoint,
      params: { text },
    });

    return data;
  }

  return <FeelingContext.Provider value={{ search }} {...props} />;
}

export const useFeeling = () => useContext<Context>(FeelingContext);
