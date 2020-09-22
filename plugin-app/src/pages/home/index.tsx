import "./style.scss";

import React, { useState, useEffect } from "react";
import { MenuItem, Grid, Typography } from "@material-ui/core";

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
import { MusicOff } from "@material-ui/icons";

export default function () {
  const { isPlayerReady, isPluginPlayerActive, transferUserPlaybackToPlugin, playerHasError } = usePlayer();
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
    <Layout className="home-page" pageTitle="Reprodução de músicas" menuItems={CustomMenu(fetchData)}>
      {!playerHasError ? (
        isPlayerReady ? (
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
        )
      ) : (
        <SpotifyError />
      )}
    </Layout>
  );
}

function SpotifyError() {
  return (
    <Grid container spacing={4}>
      <Grid container item md={12} direction="column" justify="center" alignItems="center">
        <MusicOff style={{ fontSize: 80 }} />
      </Grid>
      <Grid container item md={12} direction="column" justify="center" alignItems="center">
        <Typography variant="h2" component="h2">
          Opss!!
        </Typography>
        <Typography component="p">
          Tivemos problemas ao conectar ao Spotify, tente novamente mais tarde{" "}
          <a href="https://ericoloewe.github.io/">ou entre em contato</a>.
        </Typography>
      </Grid>
    </Grid>
  );
}

function CustomMenu(refresh: () => Promise<void>) {
  return [
    <MenuItem key="refresh" onClick={() => refresh()}>
      Refresh
    </MenuItem>,
  ];
}
