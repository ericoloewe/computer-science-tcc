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
import { musicService } from "../../services/music";
import { Music } from "../../@types/music";
import { MusicAppBar } from "./music-app-bar";
import { MusicDetails } from "./music-details";
import { playlistService } from "../../services/playlist";
import { StringUtil } from "../../utils/string";
import { RenameDialog } from "./rename-dialog";
import { Loader } from "../../components/loader";
import { usePlaylist } from "../../contexts/playlist";

export default function () {
  let { playlistId: playlistIdParam } = useParams();
  const playlistId = StringUtil.toString(playlistIdParam);
  const [isRenameOpen, setOpenRename] = useState(false);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);
  const [musicsOfPlaylist, setMusicsOfPlaylist] = useState<Music[]>([]);
  const [playingMusicId, setPlayingMusicId] = useState("");
  const [favoriteMusicsMap, setFavoriteMusicsMap] = useState({} as { [key: string]: boolean });
  const { load } = usePlaylist();
  const playingMusic = getMusicById(playingMusicId);

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, [playlistId]);

  async function fetchData() {
    const playlist = await load(playlistId);
    const parsedMusics = playlist.musics.map((m) => ({ ...m, selected: m.liked }));

    console.log(parsedMusics);

    setMusicsOfPlaylist([...parsedMusics]);
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

  async function renamePlaylist(newPlaylistName: string) {
    await playlistService.rename(playlistId, newPlaylistName);
    setOpenRename(false);
  }

  async function playMusic(item: ChooseItem) {
    setPlayingMusicId(item.id);
    await musicService.play(item.id);
  }

  function getMusicById(id: string): Music | undefined {
    return musicsOfPlaylist.find((m) => m.id === id);
  }

  return isMusicDetailsOpen ? (
    <MusicDetails music={playingMusic!} onExpandClick={() => setOpenMusicDetails(false)} />
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
      {musicsOfPlaylist ? (
        <ChooseWithActions
          actionIcon={<FavoriteBorderIcon />}
          items={musicsOfPlaylist.map((m) => ({ ...m, title: m.name }))}
          onPress={playMusic}
          onPressAction={favoriteMusic}
          selectedActionIcon={<FavoriteIcon />}
        />
      ) : (
        <Loader />
      )}
      {!!playingMusic! && <MusicAppBar music={playingMusic!} onExpandClick={() => setOpenMusicDetails(true)} />}
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
