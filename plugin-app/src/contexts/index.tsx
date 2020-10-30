import React from "react";

import { AuthProvider } from "./auth";
import { EventsProvider } from "./event";
import { NewContextProvider } from "./new-context";
import { PlayerProvider } from "./player";
import { PlaylistProvider } from "./playlist";
import { SearchProvider } from "./search";
import { UserProvider } from "./user";

interface Props {
  children: JSX.Element;
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>
        <EventsProvider>
          <PlaylistProvider>
            <PlayerProvider>
              <NewContextProvider>
                <SearchProvider>{children}</SearchProvider>
              </NewContextProvider>
            </PlayerProvider>
          </PlaylistProvider>
        </EventsProvider>
      </UserProvider>
    </AuthProvider>
  );
}
