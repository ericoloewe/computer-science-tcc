import "./style.scss";

import React from "react";
import { Favorite as FavoriteIcon, Add as AddIcon } from "@material-ui/icons";

import { ChooseWithActions } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { Fab } from "@material-ui/core";

const playlists = [
  {
    title: "Playlist 1",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
    selected: true,
  },
  {
    title: "Playlist 2",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    title: "Playlist 3",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    title: "Playlist 4",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export default function () {
  return (
    <Layout className="home-page" pageTitle="Playlists">
      <ChooseWithActions items={playlists} actionIcon={<FavoriteIcon />} />
      <Fab className="new-playlist-button" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Layout>
  );
}
