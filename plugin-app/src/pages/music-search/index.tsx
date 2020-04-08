import "./style.scss";

import React from "react";
import { AppBar, Toolbar, IconButton, TextField } from "@material-ui/core";
import { Search as SearchIcon, Add as AddIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";

import { ChooseWithActions } from "../../components/choose-with-actions";

const musics = [
  {
    title: "Musica 1",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
    selected: true,
  },
  {
    title: "Musica 2",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    title: "Musica 3",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    title: "Musica 4",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export default function () {
  return (
    <article className="music-search-page">
      <SearchAppBar />
      <ChooseWithActions items={musics} actionIcon={<AddIcon />} />
    </article>
  );
}

function SearchAppBar() {
  const musicTitle = "Musica 123";

  return (
    <AppBar position="static" color="primary" className="music-app-bar">
      <Toolbar>
        <IconButton edge="start" className={"classes.menuButton"} color="inherit" aria-label="like">
          <ArrowBackIcon />
        </IconButton>
        <TextField id="standard-basic" label="Search" defaultValue={musicTitle} />
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" className={"classes.menuButton"} color="inherit" aria-label="like">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
