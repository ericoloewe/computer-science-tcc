import "./style.scss";

import React, { useState, useEffect } from "react";
import { MenuItem, Fab } from "@material-ui/core";

import { Layout } from "../shared/layout";
import { MusicDetails } from "./music-details";
import { HomeMusicBanner } from "./music-banner";
import { SpotifyDevice } from "../../@types/spotify";
import { usePlayer } from "../../contexts/player";
import { useUser } from "../../contexts/user";
import { DeviceList } from "./device-list";
import { Loader } from "../../components/loader";
import { ListOfContexts } from "./list-of-contexts";
import { Add as AddIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function () {
  const { isPlayerReady, isPluginPlayerActive, transferUserPlaybackToPlugin } = usePlayer();
  const { getAvailableDevices } = useUser();
  const [devices, setDevices] = useState<SpotifyDevice[]>([]);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(true);

  async function fetchData() {
    const devices = await getAvailableDevices();

    setDevices(devices);
  }

  async function setPlaybackToPlugin() {
    await transferUserPlaybackToPlugin();
  }

  useEffect(() => {
    if (isPlayerReady) fetchData(); // eslint-disable-next-line
  }, [isPlayerReady]);

  return (
    <Layout className="home-page" pageTitle="Reprodução de musicas" menuItems={CustomMenu(fetchData)}>
      {isPlayerReady ? (
        isPluginPlayerActive ? (
          isMusicDetailsOpen ? (
            <MusicDetails onExpandClick={() => setOpenMusicDetails(false)} />
          ) : (
            <>
              <HomeMusicBanner onBackgroundClick={() => setOpenMusicDetails(true)} />
              <ListOfContexts />
            </>
          )
        ) : (
          <DeviceList devices={devices} onAccept={setPlaybackToPlugin} />
        )
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

function CustomMenu(refresh: () => Promise<void>) {
  return [
    <MenuItem key="refresh" onClick={() => refresh()}>
      Refresh
    </MenuItem>,
  ];
}
