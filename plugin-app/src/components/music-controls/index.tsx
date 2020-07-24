import "./style.scss";
import React from "react";
import { IconButton, makeStyles, createStyles } from "@material-ui/core";
import {
  Pause as PauseIcon,
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon,
} from "@material-ui/icons";
import { usePlayer } from "../../contexts/player";

const useStyles = makeStyles(() =>
  createStyles({
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

interface Props {
  className: string;
}

export function MusicControls({ className }: Props): React.ReactElement {
  const classes = useStyles();
  const { playingMusicInfo, nextTrack, previousTrack, togglePlay } = usePlayer();

  return (
    <div className={`music-controls ${className}`}>
      <IconButton aria-label="previous" onClick={previousTrack}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton aria-label="play/pause" onClick={togglePlay}>
        {playingMusicInfo?.paused ? (
          <PlayArrowIcon className={classes.playIcon} />
        ) : (
          <PauseIcon className={classes.playIcon} />
        )}
      </IconButton>
      <IconButton aria-label="next" onClick={nextTrack}>
        <SkipNextIcon />
      </IconButton>
    </div>
  );
}
