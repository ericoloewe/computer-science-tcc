import React from "react";
import "./style.scss";
import { Layout } from "../shared/layout";
import { Choose } from "../../components/choose";
import { Button } from "@material-ui/core";

const artists = [
  {
    title: "Lorem ipsum 1",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
    selected: true,
  },
  {
    title: "Lorem ipsum 2",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    title: "Lorem ipsum 3",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    title: "Lorem ipsum 4",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export default function () {
  return (
    <Layout
      className="artists-page"
      pageTitle="Artistas preferidos"
      hideMenu={true}
    >
      <Choose textFieldLabel="Nome do artista" items={artists} />
      <Button variant="contained" color="primary" href="/">
        Proximo
      </Button>
    </Layout>
  );
}
