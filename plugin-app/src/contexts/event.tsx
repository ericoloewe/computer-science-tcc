import React, { createContext, useContext } from "react";
import { requestService } from "../services/request";
import { useUser } from "./user";
import { gtmService } from "../services/gtm";

interface Props {}

export enum EventType {
  CHANGE_MUSIC = "CHANGE_MUSIC",
  CHANGE_MUSIC_TIME = "CHANGE_MUSIC_TIME",
  CHOOSE_ACTIVITY = "CHOOSE_ACTIVITY",
  CHOOSE_FEELING = "CHOOSE_FEELING",
  CHOOSE_FEELING_TO_BE_LIKE = "CHOOSE_FEELING_TO_BE_LIKE",
  CHOOSE_LOCATION = "CHOOSE_LOCATION",
  HATED_MUSIC = "HATED_MUSIC",
  HIDE_DETAILS = "HIDE_DETAILS",
  LIKED_ARTIST = "LIKED_ARTIST",
  LIKED_GENRE = "LIKED_GENRE",
  LIKED_MUSIC = "LIKED_MUSIC",
  LOAD_LOCATION = "LOAD_LOCATION",
  PAUSE_MUSIC = "PAUSE_MUSIC",
  PLAY_MUSIC = "PLAY_MUSIC",
  RESTART_MUSIC = "RESTART_MUSIC",
  SHOW_DETAILS = "SHOW_DETAILS",
}

interface Context {
  save: (type: EventType, value?: string) => Promise<void>;
}

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const eventApiEndpoint = `${apiEndpoint}/UserEvents`;

const UserContext = createContext({} as any);
const useGTM = process.env.REACT_APP_USE_GTM !== "false";
const eventsHistory: EventType[] = [];

export function EventsProvider(props: Props) {
  const { profile } = useUser();
  const spotifyUserUri = profile.uri;

  async function save(type: EventType, value?: string): Promise<void> {
    const data = { type, value, spotifyUserUri };

    if (hasToSaveTheEvent(type)) {
      if (useGTM) {
        gtmService.sendEvent("USER_ACTION", data);
      } else {
        await requestService.post({ url: eventApiEndpoint, data });
      }
    }
  }

  function hasToSaveTheEvent(type: EventType) {
    const lastEvent = eventsHistory[eventsHistory.length - 1];

    eventsHistory.push(type);

    return !(type === lastEvent && (type === EventType.PAUSE_MUSIC || type === EventType.PLAY_MUSIC));
  }

  return <UserContext.Provider value={{ save }} {...props} />;
}

export const useEvents = () => useContext<Context>(UserContext);
