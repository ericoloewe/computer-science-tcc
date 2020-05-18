import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import {
  ExpandLess as ExpandLessIcon,
} from "@material-ui/icons";
import { usePlayer } from "../../contexts/player";

interface Props {
  onExpandClick: () => void;
}

export function MusicAppBar({ onExpandClick }: Props) {
  const { playingMusicInfo } = usePlayer();

  return (
    <AppBar position="fixed" color="primary" className="music-app-bar">
      <Toolbar>
        <Typography variant="h6" className={"title"}>
          {playingMusicInfo?.currentTrack.name}
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
