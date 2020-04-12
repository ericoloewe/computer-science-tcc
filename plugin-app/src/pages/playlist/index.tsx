import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { Music, musicService } from "../../services/music";
import { MusicAppBar } from "./music-app-bar";
import { MusicDetails } from "./music-details";
import { playlistService } from "../../services/playlist";

export default function () {
  let { playlistId } = useParams();
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);
  const [musics, setMusics] = useState([] as Music[]);
  const [playingMusic, setPlayingMusic] = useState((null as unknown) as ChooseItem); // TODO: change to music

  async function fetchData() {
    if (!!playlistId) {
      const musics = await playlistService.loadMusics(playlistId);

      setMusics(musics);
    }
  }

  async function playMusic(music: ChooseItem) {
    setPlayingMusic(music);

    await musicService.play(music);
  }

  useEffect(() => {
    fetchData();
  });

  return isMusicDetailsOpen ? (
    <MusicDetails music={playingMusic as Music} onExpandClick={() => setOpenMusicDetails(false)} />
  ) : (
    <Layout className="playlist-page" pageTitle="Nome da playlist">
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon>send</SearchIcon>}
        {...{ component: Link, to: `/playlist/${playlistId}/music-search` }}
      >
        Buscar musica
      </Button>
      <ChooseWithActions
        items={musics}
        actionIcon={<FavoriteBorderIcon />}
        selectedActionIcon={<FavoriteIcon />}
        onPress={playMusic}
      />
      <MusicAppBar music={playingMusic as Music} onExpandClick={() => setOpenMusicDetails(true)} />
    </Layout>
  );
}
