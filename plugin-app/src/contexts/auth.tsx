import React, { createContext, useState } from "react";
import { messageService } from "../services/message";
import { TimerUtil } from "../utils/timer";

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
    await TimerUtil.wait(1000);

    setIsAuthenticated(true);
  }

  async function logout(): Promise<void> {
    messageService.alert("logout");
    await TimerUtil.wait(1000);

    setIsAuthenticated(false);
  }

  return <AuthContext.Provider value={{ login, logout, isAuthenticated }} {...props} />;
}

export const useAuth = () => React.useContext<Context>(AuthContext);
