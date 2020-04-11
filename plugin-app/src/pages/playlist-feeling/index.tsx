import React from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose } from "../../components/choose";
import { Button } from "@material-ui/core";

const feelings = [
  {
    title: "Sentimento 1",
    selected: true,
  },
  {
    title: "Sentimento 2",
  },
  {
    title: "Sentimento 3",
  },
  {
    title: "Sentimento 4",
  },
];

export default function () {
  return (
    <Layout className="playlist-feeling-page" pageTitle="O que você esta sentindo?" hideMenu={true}>
      <Choose textFieldLabel="Sentimentos" items={feelings} />
      <Button variant="contained" color="primary" href="/">
        Proximo
      </Button>
    </Layout>
  );
}