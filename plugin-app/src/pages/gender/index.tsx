import React from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose } from "../../components/choose";
import { Button } from "@material-ui/core";

const gender = [
  {
    title: "Genero 1",
    selected: true,
  },
  {
    title: "Genero 2",
  },
  {
    title: "Genero 3",
  },
  {
    title: "Genero 4",
  },
];

export default function () {
  return (
    <Layout className="artists-page" pageTitle="Generos musicais preferidos">
      <Choose textFieldLabel="Genero musical" items={gender} />
      <Button variant="contained" color="primary" href="/">
        Proximo
      </Button>
    </Layout>
  );
}
