import React from "react";
import { SpotifyDevice } from "../../@types/spotify";
import { List, ListItem, ListItemText } from "@material-ui/core";

interface Props {
  devices: SpotifyDevice[];
}

export function DeviceList({ devices }: Props) {
  return (
    <List>
      {devices.map((d) => (
        <ListItem key={d.id} selected={d.is_active}>
          <ListItemText primary={d.name} secondary={d.type} />
        </ListItem>
      ))}
    </List>
  );
}
