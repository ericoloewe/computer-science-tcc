import "./style.scss";

import React, { useState, useEffect } from "react";
import { MenuItem, Fab } from "@material-ui/core";

import { Layout } from "../shared/layout";
import { MusicDetails } from "./music-details";
import { MusicControl } from "./music-control";
import { SpotifyDevice } from "../../@types/spotify";
import { usePlayer } from "../../contexts/player";
import { useUser } from "../../contexts/user";
import { DeviceList } from "./device-list";
import { Loader } from "../../components/loader";
import { ContextInfo } from "./context-info";
import { Add as AddIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const contexts = [
  {
    title: "Contexto 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est aliquam voluptas dignissimos eum blanditiis distinctio molestiae perferendis culpa. Pariatur sed amet officia incidunt natus impedit fugiat quo quia modi.",
  },
  {
    title: "Contexto 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est aliquam voluptas dignissimos eum blanditiis distinctio molestiae perferendis culpa. Pariatur sed amet officia incidunt natus impedit fugiat quo quia modi.",
  },
  {
    title: "Contexto 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est aliquam voluptas dignissimos eum blanditiis distinctio molestiae perferendis culpa. Pariatur sed amet officia incidunt natus impedit fugiat quo quia modi.",
  },
  {
    title: "Contexto 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est aliquam voluptas dignissimos eum blanditiis distinctio molestiae perferendis culpa. Pariatur sed amet officia incidunt natus impedit fugiat quo quia modi.",
  },
];

export default function () {
  const {
    isPlayerReady,
    isPluginPlayerActive,
    nextTrack,
    previousTrack,
    transferUserPlaybackToPlugin,
    togglePlay,
  } = usePlayer();
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

  async function nextMusic() {
    await nextTrack();
  }

  async function previousMusic() {
    await previousTrack();
  }

  async function toggleMusic() {
    await togglePlay();
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
              <MusicControl
                onBackgroundClick={() => setOpenMusicDetails(true)}
                onNextClick={() => nextMusic()}
                onPreviousClick={() => previousMusic()}
                onTogglePlayClick={() => toggleMusic()}
              />
              <ContextInfo contexts={contexts} />
              <Link to="/new-context">
                <Fab className="new-button" color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Link>
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
