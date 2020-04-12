import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import {
  ExpandLess as ExpandLessIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons";
import { Music } from "../../services/music";

interface Props {
  music: Music;
  onExpandClick: () => void;
}

export function MusicAppBar({ music, onExpandClick }: Props) {
  return (
    <AppBar position="fixed" color="primary" className="music-app-bar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="like">
          {!!music.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="h6" className={"title"}>
          {music.title}
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
