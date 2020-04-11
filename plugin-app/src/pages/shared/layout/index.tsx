import React, { useState } from "react";
import "./style.scss";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import { Menu, MoreVert } from "@material-ui/icons";
import { CustomDrawer } from "./custom-drawer";

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
      <CustomDrawer isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
