import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";

export interface Feeling {
  id: string;
  name: string;
  createdDate: string;
}

interface Props {}

interface Context {
  search: (text?: string) => Promise<Feeling[]>;
}

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/feelings`;

const UserContext = createContext({} as any);

export function FeelingProvider(props: Props) {
  async function search(text?: string): Promise<Feeling[]> {
    const { data } = await requestService.get<Feeling[]>({
      url: eventApiEndpoint,
      params: { text },
    });

    return data;
  }

  return <UserContext.Provider value={{ search }} {...props} />;
}

export const useFeeling = () => useContext<Context>(UserContext);
