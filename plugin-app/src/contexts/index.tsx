import React from "react";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { SearchProvider } from "./search";
import { PlaylistProvider } from "./playlist";
import { PlayerProvider } from "./player";
import { EventsProvider } from "./event";
import { FeelingProvider } from "./feeling";

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
              <FeelingProvider>
                <SearchProvider>{children}</SearchProvider>
              </FeelingProvider>
            </EventsProvider>
          </PlayerProvider>
        </PlaylistProvider>
      </UserProvider>
    </AuthProvider>
  );
}
