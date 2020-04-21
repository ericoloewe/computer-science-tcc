import React, { createContext, useState, useEffect } from "react";

import { cookieService } from "../services/storage";
import { messageService } from "../services/message";
import { SpotifyUtil } from "../utils/spotify";
import { StringUtil } from "../utils/string";
import { TimerUtil } from "../utils/timer";

interface Props {}
interface Context {
  accessToken: string;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  saveToken: (redirectUrl: string) => Promise<void>;
}

const COOKIE_NAME = process.env.REACT_APP_COOKIE_NAME || "SpotifyToken";
const AuthContext = createContext({ isAuthenticated: false } as any);

export function AuthProvider(props: Props) {
  const [accessToken, setAccessToken] = useState(cookieService.get(COOKIE_NAME));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(username: string, password: string): Promise<void> {
    var spotifyUrl = SpotifyUtil.createSpotifyAuthUrl();
    // eslint-disable-next-line
    location.href = spotifyUrl;
  }

  async function logout(): Promise<void> {
    messageService.alert("logout");
    await TimerUtil.wait(1000);
  }

  async function saveToken(redirectUrl: string): Promise<void> {
    const { accessToken: newAccessToken, expiresInSeconds } = SpotifyUtil.getTokenAndInfoFromRedirectUrl(redirectUrl);

    cookieService.save(COOKIE_NAME, newAccessToken, expiresInSeconds);
    setAccessToken(newAccessToken);
  }

  useEffect(() => {
    setIsAuthenticated(!StringUtil.isEmpty(accessToken));
  }, [accessToken]);

  return <AuthContext.Provider value={{ login, logout, saveToken, isAuthenticated, accessToken }} {...props} />;
}

export const useAuth = () => React.useContext<Context>(AuthContext);
