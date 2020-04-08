import "./style.scss";

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Favorite as FavoriteIcon, Search as SearchIcon } from "@material-ui/icons";

import { ChooseWithActions } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { MusicAppBar } from "./music-app-bar";
import { MusicDetails } from "./music-details";

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
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);

  return isMusicDetailsOpen ? (
    <MusicDetails />
  ) : (
    <Layout className="playlist-page" pageTitle="Nome da playlist">
      <Button variant="contained" color="primary" href="/" startIcon={<SearchIcon>send</SearchIcon>}>
        Buscar musica
      </Button>
      <ChooseWithActions items={musics} actionIcon={<FavoriteIcon />} />
      <MusicAppBar onExpandClick={() => setOpenMusicDetails(true)} />
    </Layout>
  );
}
