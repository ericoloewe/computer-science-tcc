import React from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose } from "../../components/choose";
import { Button } from "@material-ui/core";

const artists = [
  {
    title: "Lorem ipsum 1",
    selected: true,
  },
  {
    title: "Lorem ipsum 2",
  },
  {
    title: "Lorem ipsum 3",
  },
  {
    title: "Lorem ipsum 4",
  },
];

export default function () {
  return (
    <Layout className="artists-page" pageTitle="Artistas preferidos">
      <Choose textFieldLabel="Nome do artista" items={artists} />
      <Button variant="contained" color="primary" href="/">
        Proximo
      </Button>
    </Layout>
  );
}
