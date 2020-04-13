import React, { useState } from "react";
import "./style.scss";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import { CustomDrawer } from "./custom-drawer";
import { CustomMenu } from "./custom-menu";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  hideDrawerButton?: boolean;
  menuItems?: JSX.Element[];
  pageTitle: string;
}

export function Layout({ className, children, hideDrawerButton, menuItems, pageTitle }: Props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="root-layout">
      <header className="header">
        <AppBar position="static">
          <Toolbar>
            {!hideDrawerButton && (
              <IconButton
                edge="start"
                className={"classes.menuButton"}
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className={"title"}>
              {pageTitle}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            {!!menuItems && <CustomMenu menuItems={menuItems} />}
          </Toolbar>
        </AppBar>
      </header>
      <article className={className}>{children}</article>
      <CustomDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

