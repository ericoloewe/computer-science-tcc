import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

import { SpotifyUserGetResponse, SpotifyDevicesResponse, SpotifyDevice } from "../@types/spotify";
import { SpotifyUtil } from "../utils/spotify";

interface Props {}

export interface User {
  id: string;
  avatarSrc: string;
  email: string;
  name: string;
  link: string;
  uri: string;
}

interface BasicUser {
  spotifyUri: string;
  name: string;
  avatarSrc: string;
}

interface Context {
  getAvailableDevices: () => Promise<SpotifyDevice[]>;
  profile: User;
}

const UserContext = createContext({} as any);
const spotifyUserEndpoint = `${SpotifyUtil.getApiUrl()}/me`;

const apiEndpoint = process.env.REACT_APP_API_HOST || "https://localhost:44301/api";
const userApiEndpoint = `${apiEndpoint}/user`;
const useGTM = process.env.REACT_APP_USE_GTM !== "false";

export function UserProvider(props: Props) {
  const { isAuthenticated, requestService } = useAuth();
  const [profile, setProfile] = useState<User>({} as any);

  async function load(): Promise<void> {
    const { data } = await requestService.get<SpotifyUserGetResponse>(spotifyUserEndpoint);
    const {
      id,
      email,
      display_name: name,
      external_urls: { spotify: link },
      images,
      uri,
    } = data;
    const avatarSrc = images[0]?.url;

    setProfile({ id, email, name, link, avatarSrc, uri });

    tryToSaveAtApi({ avatarSrc, spotifyUri: uri, name });
  }

  async function getAvailableDevices(): Promise<SpotifyDevice[]> {
    const endpoint = `${spotifyUserEndpoint}/player/devices`;
    const { data } = await requestService.get<SpotifyDevicesResponse>(endpoint);

    return data.devices;
  }

  async function tryToSaveAtApi(basicUser: BasicUser): Promise<void> {
    if (!useGTM) { 
      await requestService.post({
        url: userApiEndpoint,
        data: basicUser,
      });
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      load();
    } else {
      setProfile({} as any);
    } // eslint-disable-next-line
  }, [isAuthenticated]);

  return <UserContext.Provider value={{ getAvailableDevices, profile }} {...props} />;
}

export const useUser = () => useContext<Context>(UserContext);
