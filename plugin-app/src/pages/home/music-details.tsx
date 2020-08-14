import "./style.scss";

import React, { useState, useEffect } from "react";
import { IconButton, ListItem, ListItemAvatar, Avatar, ListItemText, Slider } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { usePlayer, PlayingMusicInfo } from "../../contexts/player";
import { MusicControls } from "../../components/music-controls";

interface Props {
  onExpandClick: () => void;
}

export function MusicDetails({ onExpandClick }: Props) {
  const { playingMusicInfo } = usePlayer();

  return (
    <section className="music-details-component">
      <IconButton className="expand-more" aria-label="expand" onClick={onExpandClick}>
        <ExpandMoreIcon />
      </IconButton>
      <div className="album">
        <img
          className="image"
          src={playingMusicInfo?.currentTrack.album.image.src}
          alt={playingMusicInfo?.currentTrack.album.image.alt}
        />
      </div>
      <div className="title-and-description">
        <ListItem>
          <ListItemAvatar>
            <Avatar src={playingMusicInfo?.currentTrack.image.src} alt={playingMusicInfo?.currentTrack.image.alt} />
          </ListItemAvatar>
          <ListItemText
            primary={playingMusicInfo?.currentTrack.name}
            secondary={playingMusicInfo?.currentTrack.album.name}
          />
        </ListItem>
      </div>
      {playingMusicInfo && <MusicSlider {...playingMusicInfo} />}
      <MusicControls className="custom-controls-details" />
    </section>
  );
}

let timer: NodeJS.Timeout;

function MusicSlider({ position, paused, duration }: PlayingMusicInfo) {
  const [realPosition, setRealPosition] = useState(0);

  if (!paused) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setRealPosition(realPosition + 1);
    }, 1000);
  }

  useEffect(() => {
    setRealPosition(position / 1000);
  }, [position]);

  return (
    <div className="slider">
      <Slider value={realPosition} max={duration / 1000} aria-labelledby="slider" valueLabelDisplay="off" />
    </div>
  );
}
