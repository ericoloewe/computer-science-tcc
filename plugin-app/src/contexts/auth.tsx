import React, { createContext, useState, useEffect } from "react";

import { cookieService } from "../services/storage";
import { SpotifyUtil } from "../utils/spotify";
import { StringUtil } from "../utils/string";
import { SpotifyRequestService } from "../services/request";

interface Props {}
interface Context {
  accessToken: string;
  isAuthenticated: boolean;
  logout: () => void;
  requestService: SpotifyRequestService;
  saveToken: (redirectUrl: string) => void;
}

const COOKIE_NAME = process.env.REACT_APP_COOKIE_NAME || "SpotifyToken";
const AuthContext = createContext({ isAuthenticated: false } as any);

export function AuthProvider(props: Props) {
  const [accessToken, setAccessToken] = useState<null | string>(cookieService.get(COOKIE_NAME));
  const [requestService, setRequestService] = useState(new SpotifyRequestService(accessToken));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function logout(): void {
    setAccessToken(null);
    cookieService.delete(COOKIE_NAME);

    if (window.confirm("Deseja sair do Spotify?")) {
      const url = "https://www.spotify.com/logout/";

      const spotifyLogoutWindow = window.open(url, "Spotify Logout", "width=700,height=500,top=40,left=40");
      setTimeout(() => spotifyLogoutWindow?.close(), 5000);
    }
  }

  function saveToken(redirectUrl: string): void {
    const { accessToken: newAccessToken, expiresInSeconds } = SpotifyUtil.getTokenAndInfoFromRedirectUrl(redirectUrl);

    cookieService.save(COOKIE_NAME, newAccessToken, expiresInSeconds);
    setAccessToken(newAccessToken);
  }

  useEffect(() => {
    setIsAuthenticated(!StringUtil.isEmpty(accessToken));
    setRequestService(new SpotifyRequestService(accessToken));
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ logout, saveToken, isAuthenticated, accessToken, requestService }} {...props} />
  );
}

export const useAuth = () => React.useContext<Context>(AuthContext);
