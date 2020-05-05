import React from "react";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { SearchProvider } from "./search";
import { PlaylistProvider } from "./playlist";
import { MusicProvider } from "./music";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>
        <PlaylistProvider>
          <MusicProvider>
            <SearchProvider>{children}</SearchProvider>
          </MusicProvider>
        </PlaylistProvider>
      </UserProvider>
    </AuthProvider>
  );
}
