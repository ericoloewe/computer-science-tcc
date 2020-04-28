import React from "react";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { SearchProvider } from "./search";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>
        <SearchProvider>{children}</SearchProvider>
      </UserProvider>
    </AuthProvider>
  );
}
