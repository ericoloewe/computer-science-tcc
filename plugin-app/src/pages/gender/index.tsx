import React from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose } from "../../components/choose";
import { Button } from "@material-ui/core";

const gender = [
  {
    id: 1,
    title: "Genero 1",
    selected: true,
  },
  {
    id: 2,
    title: "Genero 2",
  },
  {
    id: 3,
    title: "Genero 3",
  },
  {
    id: 4,
    title: "Genero 4",
  },
];

export default function () {
  return (
    <Layout className="gender-page" pageTitle="Generos musicais preferidos" hideDrawerButton={true}>
      <Choose searchLabel="Genero musical" items={gender} />
      <Button variant="contained" color="primary" href="/">
        Proximo
      </Button>
    </Layout>
  );
}
