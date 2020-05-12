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
import { useMusic, PlayingMusicInfo } from "../../contexts/music";

const feelings = [
  { text: "Feliz", value: "feliz" },
  { text: "Triste", value: "triste" },
];

interface Props {
  onExpandClick: () => void;
}

export function MusicDetails({ onExpandClick }: Props) {
  const { playingMusicInfo } = useMusic();

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
      <div className="feelings">
        <FormControl className="make-me-feel">
          <InputLabel htmlFor="age-native-simple">Essa musica faz me sentir</InputLabel>
          <Select
            native
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
            startAdornment={
              <InputAdornment position="start">
                <FavoriteIcon />
              </InputAdornment>
            }
          >
            <option aria-label="Sentimento" value="" />
            {feelings.map((f) => (
              <option key={f.value} value={f.value}>
                {f.text}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl className="like-to-listen">
          <InputLabel htmlFor="age-native-simple">Eu gosto de ouvir quando me sinto</InputLabel>
          <Select
            native
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
            startAdornment={
              <InputAdornment position="start">
                <FingerprintIcon />
              </InputAdornment>
            }
          >
            <option aria-label="Sentimento" value="" />
            {feelings.map((f) => (
              <option key={f.value} value={f.value}>
                {f.text}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
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
      <Slider value={realPosition} max={duration / 1000} aria-labelledby="slider" valueLabelDisplay="auto" />
    </div>
  );
}
