import "./style.scss";

import React, { useState, useEffect } from "react";
import {
  IconButton,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Slider,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  Fingerprint as FingerprintIcon,
  Favorite as FavoriteIcon,
} from "@material-ui/icons";
import { usePlayer, PlayingMusicInfo } from "../../contexts/player";

const feelings = [
  { text: "Feliz", value: "feliz" },
  { text: "Triste", value: "triste" },
];

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
