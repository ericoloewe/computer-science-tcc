import React from "react";

import { ActivityProvider } from "./activity";
import { AuthProvider } from "./auth";
import { EventsProvider } from "./event";
import { FeelingProvider } from "./feeling";
import { LocationProvider } from "./location";
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
        <PlaylistProvider>
          <PlayerProvider>
            <EventsProvider>
              <FeelingProvider>
                <ActivityProvider>
                  <LocationProvider>
                    <SearchProvider>{children}</SearchProvider>
                  </LocationProvider>
                </ActivityProvider>
              </FeelingProvider>
            </EventsProvider>
          </PlayerProvider>
        </PlaylistProvider>
      </UserProvider>
    </AuthProvider>
  );
}
