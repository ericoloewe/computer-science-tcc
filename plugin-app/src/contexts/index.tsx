import React from "react";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { SearchProvider } from "./search";
import { PlaylistProvider } from "./playlist";
import { PlayerProvider } from "./player";
import { EventsProvider } from "./event";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>
        <PlaylistProvider>
          <PlayerProvider>
            <EventsProvider>
              <SearchProvider>{children}</SearchProvider>
            </EventsProvider>
          </PlayerProvider>
        </PlaylistProvider>
      </UserProvider>
    </AuthProvider>
  );
}
