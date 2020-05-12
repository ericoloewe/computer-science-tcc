import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button, MenuItem } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

import { ChooseItem } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { Music } from "../../@types/music";
import { MusicAppBar } from "./music-app-bar";
import { MusicDetails } from "./music-details";
import { StringUtil } from "../../utils/string";
import { RenameDialog } from "./rename-dialog";
import { usePlaylist } from "../../contexts/playlist";
import { MusicsOfPlaylist } from "./musics-of-playlist";
import { useMusic } from "../../contexts/music";

export default function () {
  let { playlistId: playlistIdParam } = useParams();
  const playlistId = StringUtil.toString(playlistIdParam);

  const [isRenameOpen, setOpenRename] = useState(false);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);
  const [musicsOfPlaylist, setMusicsOfPlaylist] = useState<Music[]>([]);
  const [playingMusicId, setPlayingMusicId] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("Carregando playlist");
  const [favoriteMusicsMap, setFavoriteMusicsMap] = useState({} as { [key: string]: boolean });

  const { play, toggleFavorite } = useMusic();
  const { load, rename } = usePlaylist();
  const playingMusic = getMusicById(playingMusicId);

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, [playlistId]);

  async function fetchData() {
    const { musics, title } = await load(playlistId);
    const parsedMusics = musics.map((m) => ({ ...m, selected: m.liked }));

    setPlaylistTitle(title);
    setMusicsOfPlaylist([...parsedMusics]);
  }

  async function favoriteMusic(music: ChooseItem) {
    if (favoriteMusicsMap[music.id] != null) {
      delete favoriteMusicsMap[music.id];
    } else {
      favoriteMusicsMap[music.id] = true;
    }

    setFavoriteMusicsMap({ ...favoriteMusicsMap });
    await toggleFavorite(music.id); // TODO: loader
  }

  async function renamePlaylist(newPlaylistName: string) {
    await rename(playlistId, newPlaylistName);
    setOpenRename(false);
    setPlaylistTitle(newPlaylistName);
  }

  async function playMusic(item: ChooseItem) {
    const music = getMusicById(item.id);

    if (!music) {
      throw new Error("Invalid music");
    }

    await play(music?.uri);
    setPlayingMusicId(item.id);
  }

  function getMusicById(id: string): Music | undefined {
    return musicsOfPlaylist.find((m) => m.id === id);
  }

  return isMusicDetailsOpen && playingMusic ? (
    <MusicDetails music={playingMusic} onExpandClick={() => setOpenMusicDetails(false)} />
  ) : (
    <Layout className="playlist-page" pageTitle={playlistTitle} menuItems={CustomMenu(() => setOpenRename(true))}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon>send</SearchIcon>}
        {...{ component: Link, to: `/playlist/${playlistId}/music-search` }}
      >
        Buscar musica
      </Button>
      <MusicsOfPlaylist musics={musicsOfPlaylist} onPlayMusic={playMusic} onFavoriteMusic={favoriteMusic} />
      {!!playingMusic! && <MusicAppBar music={playingMusic!} onExpandClick={() => setOpenMusicDetails(true)} />}
      <RenameDialog
        isOpen={isRenameOpen}
        onClose={() => setOpenRename(false)}
        onSubmit={renamePlaylist}
        playlistTitle={playlistTitle}
      />
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
