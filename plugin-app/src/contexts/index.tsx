import React from "react";
import { AuthProvider } from "./auth";
import { UserProvider } from "./user";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
