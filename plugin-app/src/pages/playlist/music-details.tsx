import "./style.scss";

import React from "react";
import {
  Typography,
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
import { Music } from "../../services/music";

const feelings = [
  { text: "Feliz", value: "feliz" },
  { text: "Triste", value: "triste" },
];

interface Props {
  music: Music;
  onExpandClick: () => void;
}

export function MusicDetails({ music, onExpandClick }: Props) {
  return (
    <section className="music-details-component">
      <IconButton className="expand-more" aria-label="expand" onClick={onExpandClick}>
        <ExpandMoreIcon />
      </IconButton>
      <div className="album">
        <img
          className="image"
          src="https://lojasaraiva.vteximg.com.br/arquivos/ids/4141760/1004281902.jpg?v=637050395611870000"
          alt="album jack"
        />
      </div>
      <div className="title-and-description">
        <ListItem>
          <ListItemAvatar>
            <Avatar src={music.image.src} alt={music.image.alt} />
          </ListItemAvatar>
          <ListItemText primary={music.title} secondary={"Album"} />
        </ListItem>
        <Typography className="details" paragraph={true}>
          {music.description}
        </Typography>
      </div>
      <div className="slider">
        <Slider defaultValue={30} aria-labelledby="slider" valueLabelDisplay="auto" />
      </div>
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
