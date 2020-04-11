import "./style.scss";

import React from "react";
import { Favorite as FavoriteIcon, Add as AddIcon } from "@material-ui/icons";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { Fab } from "@material-ui/core";
import { Link } from "react-router-dom";

const playlists: ChooseItem[] = [
  {
    id: 1,
    title: "Playlist 1",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 2,
    title: "Playlist 2",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 3,
    title: "Playlist 3",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 4,
    title: "Playlist 4",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

function PlaylistLink({ item, children }: { item: ChooseItem; children: any }) {
  return <Link to={`/playlist/feeling/${item.id}`}>{children}</Link>;
}

export default function () {
  return (
    <Layout className="home-page" pageTitle="Playlists">
      <ChooseWithActions items={playlists} actionIcon={<FavoriteIcon />} linkComponent={PlaylistLink} />
      <Link to="/playlist-feeling">
        <Fab className="new-playlist-button" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </Layout>
  );
}
