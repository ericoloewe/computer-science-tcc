import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";
import { TimerUtil } from "../utils/timer";

import { profileMock } from "../services/mocks";

interface Props {}

export interface User {
  avatarSrc: string;
  mail: string;
  name: string;
}

const UserContext = createContext({} as any);

export function UserProvider(props: Props) {
  const { isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<User | null>(null);

  async function load(): Promise<void> {
    await TimerUtil.wait(1000);
    setProfile({ ...profileMock });
  }

  useEffect(() => {
    load(); // eslint-disable-next-line
  }, [isAuthenticated]);

  return <UserContext.Provider value={profile} {...props} />;
}

export const useUser = () => useContext<User>(UserContext);
