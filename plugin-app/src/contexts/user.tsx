import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

import { SpotifyUserGetResponse } from "../@types/spotify";
import { SpotifyUtil } from "../utils/spotify";

interface Props {}

export interface User {
  id: string;
  avatarSrc: string;
  email: string;
  name: string;
  link: string;
}

interface Context {
  getAvailableDevices: () => Promise<void>;
  profile: User;
}

const UserContext = createContext({} as any);
const spotifyUserEndpoint = `${SpotifyUtil.getApiUrl()}/me`;

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
    } = data;
    const avatarSrc = images[0]?.url;

    setProfile({ id, email, name, link, avatarSrc });
  }

  async function getAvailableDevices(): Promise<void> {
    const endpoint = `${spotifyUserEndpoint}/player/devices`;
    const { data } = await requestService.get<any>(endpoint);

    console.log(data);
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
