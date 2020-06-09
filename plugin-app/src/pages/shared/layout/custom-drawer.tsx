import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, ListItemAvatar, Avatar } from "@material-ui/core";
import {
  Home as HomeIcon,
  ExitToApp as ExitToAppIcon,
  LibraryMusic as LibraryMusicIcon,
  Face as FaceIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { useUser } from "../../../contexts/user";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomDrawer({ isOpen, onClose }: DrawerProps) {
  const {
    profile: { avatarSrc, email, name, link },
  } = useUser();
  // eslint-disable-next-line
  const customLink = (props: any) => <a {...props} />;

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button {...{ component: customLink, href: link, target: "_blank" }}>
          <ListItemAvatar>
            <Avatar src={avatarSrc} alt="User avatar" />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={email} />
        </ListItem>
        <Divider />
        <ListItem button {...{ component: Link, to: `/` }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button {...{ component: Link, to: `/new-context/artists` }}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Artistas preferidos" />
        </ListItem>
        <ListItem button {...{ component: Link, to: `/new-context/gender` }}>
          <ListItemIcon>
            <LibraryMusicIcon />
          </ListItemIcon>
          <ListItemText primary="Generos preferidos" />
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
