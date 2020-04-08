import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { ExpandLess as ExpandLessIcon, Favorite as FavoriteIcon } from "@material-ui/icons";

interface Props {
  onExpandClick: () => void;
}

export function MusicAppBar({ onExpandClick }: Props) {
  const musicTitle = "Musica 1";

  return (
    <AppBar position="fixed" color="primary" className="music-app-bar">
      <Toolbar>
        <IconButton edge="start" className={"classes.menuButton"} color="inherit" aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="h6" className={"title"}>
          {musicTitle}
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          className={"classes.menuButton"}
          color="inherit"
          aria-label="like"
          onClick={onExpandClick}
        >
          <ExpandLessIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
