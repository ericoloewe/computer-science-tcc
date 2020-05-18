import React from "react";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { SearchProvider } from "./search";
import { PlaylistProvider } from "./playlist";
import { PlayerProvider } from "./player";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>
        <PlaylistProvider>
          <PlayerProvider>
            <SearchProvider>{children}</SearchProvider>
          </PlayerProvider>
        </PlaylistProvider>
      </UserProvider>
    </AuthProvider>
  );
}
