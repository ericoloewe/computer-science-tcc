import React from "react";
import "./style.css";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";

interface Props {
  children: any;
}

export function Layout({ children }: Props) {
  return (
    <div className="root-layout">
      <header className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={"classes.menuButton"}
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" className={"title"}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </header>
      <article>{children}</article>
    </div>
  );
}
