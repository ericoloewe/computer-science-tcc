import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";

export interface Location {
  id: string;
  name: string;
  createdDate: string;
}

interface Props {}

interface Context {
  search: (text?: string) => Promise<Location[]>;
}

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/locations`;

const LocationContext = createContext({} as any);

export function LocationProvider(props: Props) {
  async function search(text?: string): Promise<Location[]> {
    const { data } = await requestService.get<Location[]>({
      url: eventApiEndpoint,
      params: { text },
    });

    return data;
  }

  return <LocationContext.Provider value={{ search }} {...props} />;
}

export const useLocation = () => useContext<Context>(LocationContext);
