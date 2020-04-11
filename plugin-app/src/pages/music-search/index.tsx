import "./style.scss";

import React from "react";
import { AppBar, Toolbar, IconButton, TextField, makeStyles } from "@material-ui/core";
import { Search as SearchIcon, Add as AddIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";

import { ChooseWithActions } from "../../components/choose-with-actions";
import { useHistory } from "react-router-dom";

const musics = [
  {
    id: 1,
    title: "Musica 1",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
    selected: true,
  },
  {
    id: 2,
    title: "Musica 2",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 3,
    title: "Musica 3",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 4,
    title: "Musica 4",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export default function () {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <article className="music-search-page">
      <SearchAppBar onBackClick={goBack} />
      <ChooseWithActions items={musics} actionIcon={<AddIcon />} />
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
}

function SearchAppBar({ onBackClick }: SearchAppBarProps) {
  const classes = useStyles();
  const musicTitle = "Musica 123";

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
          defaultValue={musicTitle}
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
