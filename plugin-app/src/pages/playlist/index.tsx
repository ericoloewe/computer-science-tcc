import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button, MenuItem } from "@material-ui/core";
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
import { StringUtil } from "../../utils/string";
import { RenameDialog } from "./rename-dialog";
import { Loader } from "../../components/loader";

export default function () {
  let { playlistId: playlistIdParam } = useParams();
  const playlistId = StringUtil.toString(playlistIdParam);
  const [isRenameOpen, setOpenRename] = useState(false);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);
  const [playlist, setPlaylist] = useState({} as any);
  const [playingMusic, setPlayingMusic] = useState((null as unknown) as Music); // TODO: change to music
  const [favoriteMusicsMap, setFavoriteMusicsMap] = useState({} as { [key: string]: boolean });

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, [playlistId]);

  useEffect(() => {
    updateFavoriteMusics(playlist.musics || []); // eslint-disable-next-line
  }, [favoriteMusicsMap]);

  async function fetchData() {
    const playlist = await playlistService.load(playlistId);
    const parsedMusics = playlist.musics.map((m) => ({ ...m, selected: m.liked }));

    setPlaylist(parsedMusics);
    updateFavoriteMusics(parsedMusics);
  }

  async function favoriteMusic(music: ChooseItem) {
    if (favoriteMusicsMap[music.id] != null) {
      delete favoriteMusicsMap[music.id];
    } else {
      favoriteMusicsMap[music.id] = true;
    }

    setFavoriteMusicsMap({ ...favoriteMusicsMap });
    await musicService.toggleFavorite(music); // TODO: loader
  }

  function updateFavoriteMusics(musics: ChooseItem[]) {
    const musicsMappedWithFavorite = musics.map((m) => ({ ...m, selected: !!favoriteMusicsMap[m.id] }));

    if (!!playingMusic) {
      playingMusic.liked = !!favoriteMusicsMap[playingMusic.id];
      setPlayingMusic({ ...playingMusic });
    }

    setPlaylist({ ...playlist, musics: musicsMappedWithFavorite });
  }

  async function renamePlaylist(newPlaylistName: string) {
    await playlistService.rename(playlistId, newPlaylistName);
    setPlaylist({ ...playlist, title: newPlaylistName });
    setOpenRename(false);
  }

  async function playMusic(item: ChooseItem) {
    const music = item as Music;

    music.liked = !!favoriteMusicsMap[music.id];
    setPlayingMusic(music);
    await musicService.play(music);
  }

  return isMusicDetailsOpen ? (
    <MusicDetails music={playingMusic} onExpandClick={() => setOpenMusicDetails(false)} />
  ) : (
    <Layout className="playlist-page" pageTitle="Nome da playlist" menuItems={CustomMenu(() => setOpenRename(true))}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon>send</SearchIcon>}
        {...{ component: Link, to: `/playlist/${playlistId}/music-search` }}
      >
        Buscar musica
      </Button>
      {playlist.musics ? (
        <ChooseWithActions
          actionIcon={<FavoriteBorderIcon />}
          items={playlist.musics}
          onPress={playMusic}
          onPressAction={favoriteMusic}
          selectedActionIcon={<FavoriteIcon />}
        />
      ) : (
        <Loader />
      )}
      {!!playingMusic && <MusicAppBar music={playingMusic} onExpandClick={() => setOpenMusicDetails(true)} />}
      <RenameDialog isOpen={isRenameOpen} onSubmit={renamePlaylist} />
    </Layout>
  );
}

function CustomMenu(openRename: () => void) {
  return [
    <MenuItem key={"rename"} onClick={() => openRename()}>
      Renomear
    </MenuItem>,
  ];
}
