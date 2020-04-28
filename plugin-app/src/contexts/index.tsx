import React from "react";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { SearchProvider } from "./search";
import { PlaylistProvider } from "./playlist";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>
        <PlaylistProvider>
          <SearchProvider>{children}</SearchProvider>
        </PlaylistProvider>
      </UserProvider>
    </AuthProvider>
  );
}
