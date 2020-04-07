import React from "react";
import "./style.css";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import { Menu } from "@material-ui/icons";

interface Props {
  className?: string;
  children: any;
  pageTitle: string;
}

export function Layout({ className, children, pageTitle }: Props) {
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
              {pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <article className={className}>{children}</article>
    </div>
  );
}
