import "./style.scss";

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, TextField, makeStyles, Typography } from "@material-ui/core";
import { Search as SearchIcon, Add as AddIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { ChooseWithActions } from "../../components/choose-with-actions";
import { Music, musicService } from "../../services/music";

export default function () {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [musics, setMusics] = useState([] as Music[]);

  function goBack() {
    history.goBack();
  }

  async function changeSearchText(text: string) {
    setSearchText(text);
    searchMusicsOfTexts(text);
  }

  async function searchMusicsOfTexts(text: string) {
    const musics = await musicService.searchMusic(text);

    setMusics(musics);
  }

  return (
    <article className="music-search-page">
      <SearchAppBar searchText={searchText} onSearchChange={changeSearchText} onBackClick={goBack} />
      <section className="choose-or-description">
        {!!searchText ? (
          <ChooseWithActions items={musics} actionIcon={<AddIcon />} />
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
