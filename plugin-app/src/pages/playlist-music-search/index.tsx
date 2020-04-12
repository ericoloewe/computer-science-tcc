import "./style.scss";

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, TextField, makeStyles, Typography } from "@material-ui/core";
import {
  Add as AddIcon,
  ArrowBack as ArrowBackIcon,
  Remove as RemoveIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import { useHistory, useParams } from "react-router-dom";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { musicService } from "../../services/music";
import { playlistService } from "../../services/playlist";
import { StringUtil } from "../../utils/string";

export default function () {
  let { playlistId: playlistIdParam } = useParams();
  const playlistId = StringUtil.toString(playlistIdParam);
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [selectedMusicsMap, setSelectedMusics] = useState({} as { [key: string]: ChooseItem });
  const [musics, setMusics] = useState([] as ChooseItem[]);

  async function goBack() {
    const musicsToSave = Object.keys(selectedMusicsMap).map((k) => selectedMusicsMap[k]);

    await playlistService.saveMusics(playlistId, musicsToSave);
    history.goBack();
  }

  async function changeSearchText(text: string) {
    setSearchText(text);
    searchMusicsOfTexts(text);
  }

  function chooseMusic(music: ChooseItem) {
    if (selectedMusicsMap[music.id] != null) {
      delete selectedMusicsMap[music.id];
    } else {
      selectedMusicsMap[music.id] = music;
    }

    setSelectedMusics({ ...selectedMusicsMap });
  }

  function markSelectedMusics(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedMusicsMap[m.id] != null }));

    setMusics(musicsMappedWithSelected);
  }

  async function searchMusicsOfTexts(text: string) {
    const musics = await musicService.searchMusic(text);

    setMusics([...musics]);
    markSelectedMusics(musics);
  }

  useEffect(() => {
    markSelectedMusics(musics); // eslint-disable-next-line
  }, [selectedMusicsMap]);

  return (
    <article className="music-search-page">
      <SearchAppBar searchText={searchText} onSearchChange={changeSearchText} onBackClick={goBack} />
      <section className="choose-or-description">
        {!!searchText ? (
          <ChooseWithActions
            items={musics}
            actionIcon={<AddIcon />}
            selectedActionIcon={<RemoveIcon />}
            onPressAction={chooseMusic}
          />
        ) : (
          <Typography paragraph>Digite um termo a ser procurado</Typography>
        )}
      </section>
    </article>
  );
}

const useStyles = makeStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline": {
      "&:after,&:before": {
        borderBottomColor: "white",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#eee",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
  input: {
    color: "white",
  },
});

interface SearchAppBarProps {
  onBackClick: () => void;
  onSearchChange: (text: string) => void;
  searchText: string;
}

function SearchAppBar({ onBackClick, onSearchChange, searchText }: SearchAppBarProps) {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className="music-app-bar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="like" onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <TextField
          id="standard-basic"
          className={classes.root}
          label="Search"
          onChange={(e) => onSearchChange(e.target.value)}
          value={searchText}
          InputProps={{
            className: classes.input,
          }}
        />
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" color="inherit" aria-label="like">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
