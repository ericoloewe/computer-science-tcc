import React, { useState } from "react";
import "./style.scss";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import { Menu, MoreVert, Home as HomeIcon, Settings as SettingsIcon } from "@material-ui/icons";

interface Props {
  children: any;
  className?: string;
  hideMenu?: boolean;
  pageTitle: string;
}

export function Layout({ className, children, hideMenu, pageTitle }: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="root-layout">
      <header className="header">
        <AppBar position="static">
          <Toolbar>
            {!hideMenu && (
              <IconButton
                edge="start"
                className={"classes.menuButton"}
                color="inherit"
                aria-label="menu"
                onClick={() => setMenuOpen(true)}
              >
                <Menu />
              </IconButton>
            )}
            <Typography variant="h6" className={"title"}>
              {pageTitle}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <IconButton edge="end" color="inherit" aria-label="more">
              <MoreVert />
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <article className={className}>{children}</article>
      <Drawer anchor="left" open={isMenuOpen} onClose={() => setMenuOpen(false)}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemAvatar>
              <Avatar src={"https://avatars2.githubusercontent.com/u/8793862?s=400&v=4"} alt="User avatar" />
            </ListItemAvatar>
            <ListItemText primary="Lorem ipsum dolor set" secondary="mail@domain.com" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
