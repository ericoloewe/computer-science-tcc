import "./style.scss";

import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Loader } from "../../components/loader";
import { Layout } from "../shared/layout";
import { usePlaylist } from "../../contexts/playlist";

export default function () {
  const { create } = usePlaylist();
  const history = useHistory();

  async function fetchData() {
    const playlistId = await create();

    history.push(`/playlist/${playlistId}/feeling`);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <Layout className="playlist-new-page" pageTitle="Nova playlist" hideDrawerButton={true}>
      <Loader />
      <Typography paragraph>Aguarde enquanto sua playlist esta sendo gerada</Typography>
    </Layout>
  );
}
