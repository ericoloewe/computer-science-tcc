import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, ListItemAvatar, Avatar } from "@material-ui/core";
import { Home as HomeIcon, Settings as SettingsIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomDrawer({ isOpen, onClose }: DrawerProps) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemAvatar>
            <Avatar src={"https://avatars2.githubusercontent.com/u/8793862?s=400&v=4"} alt="User avatar" />
          </ListItemAvatar>
          <ListItemText primary="Lorem ipsum dolor set" secondary="mail@domain.com" />
        </ListItem>
        <Divider />
        <ListItem button {...{ component: Link, to: `/` }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button {...{ component: Link, to: `/settings` }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}
