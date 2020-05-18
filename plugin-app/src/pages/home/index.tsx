import "./style.scss";

import React, { useState, useEffect } from "react";
import { MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Layout } from "../shared/layout";
import { MusicAppBar } from "./music-app-bar";
import { MusicDetails } from "./music-details";
import { MusicList } from "./music-list";
import { SpotifyDevice } from "../../@types/spotify";
import { usePlayer } from "../../contexts/player";
import { useUser } from "../../contexts/user";
import { DeviceList } from "./device-list";
import { Loader } from "../../components/loader";

export default function () {
  const { isPlayerReady, isPluginPlayerActive } = usePlayer();
  const { getAvailableDevices } = useUser();
  const history = useHistory();
  const [devices, setDevices] = useState<SpotifyDevice[]>([]);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(true);

  async function fetchData() {
    const devices = await getAvailableDevices();

    setDevices(devices);
  }

  async function logout() {
    history.push(`/logout`);
  }

  useEffect(() => {
    if (isPlayerReady) fetchData(); // eslint-disable-next-line
  }, [isPlayerReady]);

  return (
    <Layout className="home-page" pageTitle="Reprodução de musicas" menuItems={CustomMenu(fetchData, logout)}>
      {isPlayerReady ? (
        isPluginPlayerActive ? (
          isMusicDetailsOpen ? (
            <MusicDetails onExpandClick={() => setOpenMusicDetails(false)} />
          ) : (
            <>
              <MusicList musics={[]} onPlayMusic={() => {}} />
              <MusicAppBar onExpandClick={() => setOpenMusicDetails(true)} />
            </>
          )
        ) : (
          <DeviceList devices={devices} />
        )
      ) : (
        <Loader />
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
