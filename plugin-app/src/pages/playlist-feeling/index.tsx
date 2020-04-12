import React, { useState, useEffect } from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose, ChooseItem } from "../../components/choose";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { playlistService } from "../../services/playlist";
import { StringUtil } from "../../utils/string";
import { feelingService } from "../../services/feeling";

export default function () {
  let { playlistId: playlistIdParam } = useParams();
  const playlistId = StringUtil.toString(playlistIdParam);
  const history = useHistory();

  const [feelings, setFeelings] = useState([] as ChooseItem[]);

  async function fetchData() {
    const feelings = await feelingService.load();

    setFeelings(feelings);
  }

  function chooseFelling(item: ChooseItem) {
    const index = feelings.findIndex((f) => f === item);

    feelings[index].selected = !feelings[index].selected;
    setFeelings([...feelings]);
  }

  async function saveAndGoToPlaylist() {
    await playlistService.saveFeelings(
      playlistId,
      feelings.filter((f) => f.selected)
    );

    history.push(`/playlist/${playlistId}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout className="playlist-feeling-page" pageTitle="O que você esta sentindo?" hideMenu={true}>
      <Choose textFieldLabel="Sentimentos" items={feelings} onChoose={chooseFelling} />
      <Button variant="contained" color="primary" onClick={saveAndGoToPlaylist}>
        Proximo
      </Button>
    </Layout>
  );
}
