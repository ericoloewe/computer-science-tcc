import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

import { SpotifyUserGetResponse } from "../react-app-env";

interface Props {}

export interface User {
  avatarSrc: string;
  email: string;
  name: string;
  link: string;
}

const UserContext = createContext({} as any);

export function UserProvider(props: Props) {
  const { isAuthenticated, requestService } = useAuth();
  const [profile, setProfile] = useState<User>({} as any);

  async function load(): Promise<void> {
    const { data } = await requestService.get<SpotifyUserGetResponse>("https://api.spotify.com/v1/me");
    const {
      email,
      display_name: name,
      external_urls: { spotify: link },
      images,
    } = data;
    const avatarSrc = images[0]?.url;

    setProfile({ email, name, link, avatarSrc });
  }

  useEffect(() => {
    if (isAuthenticated) {
      load();
    } else {
      setProfile({} as any);
    }
  }, [isAuthenticated]);

  return <UserContext.Provider value={profile} {...props} />;
}

export const useUser = () => useContext<User>(UserContext);
