import React from "react";

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Container,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import {
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon,
} from "@material-ui/icons";
import { usePlayer } from "../../contexts/player";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      zIndex: 2,
    },
    content: {
      flex: "1 0 auto",
      zIndex: 2,
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

interface Props {
  onClick: () => void;
}

export function MusicControl({ onClick }: Props) {
  const classes = useStyles();
  const { playingMusicInfo } = usePlayer();

  return (
    <Container className="music-control">
      <Card className={`${classes.root} music-control-card`}>
        <div className="background" onClick={onClick}></div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {playingMusicInfo?.currentTrack.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {playingMusicInfo?.currentTrack.album.name}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={playingMusicInfo?.currentTrack.image.src}
          title={playingMusicInfo?.currentTrack.image.alt}
        />
      </Card>
    </Container>
  );
}
