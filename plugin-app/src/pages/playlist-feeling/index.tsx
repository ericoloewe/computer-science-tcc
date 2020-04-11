import React, { useState, useEffect } from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose, ChooseItem } from "../../components/choose";
import { Button } from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import { playlistService, Feeling } from "../../services/playlist";

const feelingsMock: Feeling[] = [
  {
    id: 1,
    title: "Sentimento 1",
  },
  {
    id: 2,
    title: "Sentimento 2",
  },
  {
    id: 3,
    title: "Sentimento 3",
  },
  {
    id: 4,
    title: "Sentimento 4",
  },
];

export default function () {
  let { playlistId } = useParams();
  const history = useHistory();

  const [feelings, setFeelings] = useState([] as ChooseItem[]);

  async function fetchData() {
    setFeelings(feelingsMock);
  }

  function chooseFelling(item: ChooseItem) {
    const index = feelings.findIndex((f) => f === item);

    feelings[index].selected = !feelings[index].selected;
    setFeelings([...feelings]);
  }

  function saveAndGoToPlaylist() {
    playlistService.saveFeelings(feelings.filter((f) => f.selected));
    history.push(`/playlist/${playlistId || ""}`);
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
