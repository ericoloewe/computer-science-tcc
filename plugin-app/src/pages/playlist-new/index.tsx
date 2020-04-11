import "./style.scss";

import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Loader } from "../../components/loader";
import { playlistService } from "../../services/playlist";
import { Layout } from "../shared/layout";

export default function () {
  const history = useHistory();

  async function fetchData() {
    const playlistId = await playlistService.getNextId();

    history.push(`/playlist/${playlistId}/feeling`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout className="playlist-new-page" pageTitle="Nova playlist" hideMenu={true}>
      <Loader />
      <Typography paragraph>Aguarde enquanto sua playlist esta sendo gerada</Typography>
    </Layout>
  );
}
