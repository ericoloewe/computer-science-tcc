import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";

export interface Activity {
  id: string;
  name: string;
  createdDate: string;
}

interface Props {}

interface Context {
  search: (text?: string) => Promise<Activity[]>;
}

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/activities`;

const UserContext = createContext({} as any);

export function ActivityProvider(props: Props) {
  async function search(text?: string): Promise<Activity[]> {
    const { data } = await requestService.get<Activity[]>({
      url: eventApiEndpoint,
      params: { text },
    });

    return data;
  }

  return <UserContext.Provider value={{ search }} {...props} />;
}

export const useActivity = () => useContext<Context>(UserContext);
