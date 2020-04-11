import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Favorite as FavoriteIcon, Search as SearchIcon } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

import { ChooseWithActions } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { Music } from "../../services/music";
import { MusicAppBar } from "./music-app-bar";
import { MusicDetails } from "./music-details";
import { playlistService } from "../../services/playlist";

export default function () {
  let { playlistId } = useParams();
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);
  const [musics, setMusics] = useState([] as Music[]);

  async function fetchData() {
    if (!!playlistId) {
      const musics = await playlistService.loadMusics(playlistId);

      setMusics(musics);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isMusicDetailsOpen ? (
    <MusicDetails onExpandClick={() => setOpenMusicDetails(false)} />
  ) : (
    <Layout className="playlist-page" pageTitle="Nome da playlist">
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon>send</SearchIcon>}
        {...{ component: Link, to: "/playlist/music-search" }}
      >
        Buscar musica
      </Button>
      <ChooseWithActions items={musics} actionIcon={<FavoriteIcon />} />
      <MusicAppBar onExpandClick={() => setOpenMusicDetails(true)} />
    </Layout>
  );
}
