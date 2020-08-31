import "./style.scss";

import React, { useState, useEffect } from "react";
import { MenuItem } from "@material-ui/core";

import { DeviceList } from "./device-list";
import { HomeMusicBanner } from "./music-banner";
import { Layout } from "../shared/layout";
import { ListOfContexts } from "./list-of-contexts";
import { Loader } from "../../components/loader";
import { MusicDetails } from "./music-details";
import { SpotifyDevice } from "../../@types/spotify";
import { usePlayer } from "../../contexts/player";
import { useUser } from "../../contexts/user";
import { LikeOrNotLike } from "./like";

export default function () {
  const { isPlayerReady, isPluginPlayerActive, transferUserPlaybackToPlugin } = usePlayer();
  const { getAvailableDevices } = useUser();
  const [devices, setDevices] = useState<SpotifyDevice[]>([]);
  const [isMusicDetailsOpen, setOpenMusicDetails] = useState(false);

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
              <LikeOrNotLike />
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
