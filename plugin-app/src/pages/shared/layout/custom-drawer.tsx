import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, ListItemAvatar, Avatar } from "@material-ui/core";
import { Home as HomeIcon, ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { useUser } from "../../../contexts/user";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomDrawer({ isOpen, onClose }: DrawerProps) {
  const { avatarSrc, mail, name } = useUser();
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemAvatar>
            <Avatar src={avatarSrc} alt="User avatar" />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={mail} />
        </ListItem>
        <Divider />
        <ListItem button {...{ component: Link, to: `/` }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button {...{ component: Link, to: `/logout` }}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Drawer>
  );
}
