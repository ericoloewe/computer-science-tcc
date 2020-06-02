import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";
import { useUser } from "./user";

interface Props {}

export enum EventType {
  CHANGE_MUSIC_TIME = "CHANGE_MUSIC_TIME",
  CHANGE_TO_NEXT_MUSIC = "CHANGE_TO_NEXT_MUSIC",
  CHANGE_TO_PREVIOUS_MUSIC = "CHANGE_TO_PREVIOUS_MUSIC",
  CHOOSE_FEELING = "CHOOSE_FEELING",
  HIDE_DETAILS = "HIDE_DETAILS",
  LIKED_ARTIST = "LIKED_ARTIST",
  LIKED_GENRE = "LIKED_GENRE",
  LIKED_MUSIC = "LIKED_MUSIC",
  PAUSE_MUSIC = "PAUSE_MUSIC",
  PLAY_MUSIC = "PLAY_MUSIC",
  SHOW_DETAILS = "SHOW_DETAILS",
}

interface Context {
  save: (type: EventType, value?: string) => Promise<void>;
}

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/UserEvents`;

const UserContext = createContext({} as any);

export function EventsProvider(props: Props) {
  const { profile } = useUser();
  const spotifyUserId = profile.id;

  async function save(type: EventType, value?: string): Promise<void> {
    await requestService.post({
      url: eventApiEndpoint,
      data: {
        type,
        value,
        spotifyUserId,
      },
    });
  }

  return <UserContext.Provider value={{ save }} {...props} />;
}

export const useEvents = () => useContext<Context>(UserContext);
