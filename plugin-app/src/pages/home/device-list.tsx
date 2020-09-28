import React from "react";
import { SpotifyDevice } from "../../@types/spotify";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

interface Props {
  devices: SpotifyDevice[];
  onAccept: () => void;
}

export function DeviceList({ devices, onAccept }: Props) {
  return (
    <section className="device-list">
      <List>
        {devices.map((d) => (
          <ListItem key={d.id} selected={d.is_active}>
            <ListItemText primary={d.name} secondary={d.type} />
          </ListItem>
        ))}
      </List>
      <Button className="button" color="primary" variant="contained" onClick={onAccept}>
        Usar plugin para tocar músicas
      </Button>
    </section>
  );
}
