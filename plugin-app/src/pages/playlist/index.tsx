import "./style.scss";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { ExpandLess as ExpandLessIcon, Favorite as FavoriteIcon, Search as SearchIcon } from "@material-ui/icons";

import { ChooseWithActions } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";

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
    <Layout className="playlist-page" pageTitle="Nome da playlist">
      <Button variant="contained" color="primary" href="/" startIcon={<SearchIcon>send</SearchIcon>}>
        Buscar musica
      </Button>
      <ChooseWithActions items={musics} />
      <MusicAppBar />
    </Layout>
  );
}

function MusicAppBar() {
  const musicTitle = "Musica 1";

  return (
    <AppBar position="fixed" color="primary" className="music-app-bar">
      <Toolbar>
        <IconButton edge="start" className={"classes.menuButton"} color="inherit" aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="h6" className={"title"}>
          {musicTitle}
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" className={"classes.menuButton"} color="inherit" aria-label="like">
          <ExpandLessIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
