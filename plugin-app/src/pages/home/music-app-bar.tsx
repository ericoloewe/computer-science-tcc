import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Fab } from "@material-ui/core";
import { ExpandLess as ExpandLessIcon, Add as AddIcon } from "@material-ui/icons";
import { usePlayer } from "../../contexts/player";
import { Link } from "react-router-dom";
import { StringUtil } from "../../utils/string";

interface Props {
  onExpandClick: () => void;
}

export function MusicAppBar({ onExpandClick }: Props) {
  const { playingMusicInfo } = usePlayer();

  return (
    <AppBar position="fixed" color="primary" className="music-app-bar">
      <Toolbar>
        <Link to="/playlist/new">
          <Fab className="new-button" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
        <Typography variant="h6" className={"title"}>
          {StringUtil.sliceIfNeed(`${playingMusicInfo?.currentTrack.name}`, 30)}
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
