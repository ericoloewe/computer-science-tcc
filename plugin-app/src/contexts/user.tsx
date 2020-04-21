import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

import { profileMock } from "../services/mocks";

interface Props {}

export interface User {
  avatarSrc: string;
  mail: string;
  name: string;
}

const UserContext = createContext({} as any);

export function UserProvider(props: Props) {
  const { isAuthenticated, requestService } = useAuth();
  const [profile, setProfile] = useState<User>({} as any);

  async function load(): Promise<void> {
    console.log(await requestService.get("https://api.spotify.com/v1/me"));
    setProfile({ ...profileMock });
  }

  useEffect(() => {
    load(); // eslint-disable-next-line
  }, [isAuthenticated]);

  return <UserContext.Provider value={profile} {...props} />;
}

export const useUser = () => useContext<User>(UserContext);
