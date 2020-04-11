import React from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose } from "../../components/choose";
import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

const feelings = [
  {
    id: 1,
    title: "Sentimento 1",
    selected: true,
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

  return (
    <Layout className="playlist-feeling-page" pageTitle="O que você esta sentindo?" hideMenu={true}>
      <Choose textFieldLabel="Sentimentos" items={feelings} />
      <Button variant="contained" color="primary" {...{ component: Link, to: `/playlist/${playlistId}` }}>
        Proximo
      </Button>
    </Layout>
  );
}
