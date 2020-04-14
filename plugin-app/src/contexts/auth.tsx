import React, { createContext, useState } from "react";
import { messageService } from "../services/message";

interface Props {}
interface Context {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext({ isAuthenticated: false } as any);

export function AuthProvider(props: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(username: string, password: string): Promise<void> {
    messageService.alert(`login => ${username}, ${password}`);

    setIsAuthenticated(true);
    await Promise.resolve();
  }

  async function logout(): Promise<void> {
    messageService.alert("logout");

    setIsAuthenticated(false);
    await Promise.resolve();
  }

  return <AuthContext.Provider value={{ login, logout, isAuthenticated }} {...props} />;
}

export const useAuth = () => React.useContext<Context>(AuthContext);
