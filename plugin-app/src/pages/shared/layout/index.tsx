import React from "react";
import "./style.scss";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import { Menu } from "@material-ui/icons";

interface Props {
  children: any;
  className?: string;
  hideMenu?: boolean;
  pageTitle: string;
}

export function Layout({ className, children, hideMenu, pageTitle }: Props) {
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
              >
                <Menu />
              </IconButton>
            )}
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
