import "./style.scss";

import React, { useState, useEffect } from "react";
import { Fab, MenuItem } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

import { ChooseItem } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { usePlaylist } from "../../contexts/playlist";
import { MusicDetails } from "./music-details";
import { MusicAppBar } from "./music-app-bar";
import { MusicList } from "./music-list";
import { useUser } from "../../contexts/user";

export default function () {
  const { getAvailableDevices } = useUser();
  const { loadAll } = usePlaylist();
  const history = useHistory();
  const [, setPlaylists] = useState([] as ChooseItem[]);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(true);

  async function fetchData() {
    await getAvailableDevices();
    const playlists = await loadAll();

    setPlaylists(playlists);
  }

  async function logout() {
    history.push(`/logout`);
  }

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, []);

  return (
    <Layout className="home-page" pageTitle="Reprodução de musicas" menuItems={CustomMenu(fetchData, logout)}>
      {isMusicDetailsOpen ? (
        <MusicDetails onExpandClick={() => setOpenMusicDetails(false)} />
      ) : (
        <>
          <MusicList musics={[]} onPlayMusic={() => {}} />
          <MusicAppBar onExpandClick={() => setOpenMusicDetails(true)} />
        </>
      )}
    </Layout>
  );
}

function CustomMenu(refresh: () => Promise<void>, logout: () => Promise<void>) {
  return [
    <MenuItem key="refresh" onClick={() => refresh()}>
      Refresh
    </MenuItem>,
    <MenuItem key="logout" onClick={() => logout()}>
      Logout
    </MenuItem>,
  ];
}
