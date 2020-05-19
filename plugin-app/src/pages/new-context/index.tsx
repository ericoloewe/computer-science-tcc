import "./style.scss";

import React, { useEffect } from "react";
import { Typography, Container, Grid, Card, CardContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Layout } from "../shared/layout";
import { usePlaylist } from "../../contexts/playlist";
import { MusicNote, EmojiEmotions, Explore, DirectionsRun } from "@material-ui/icons";

export default function () {
  const history = useHistory();

  async function fetchData() {}

  useEffect(() => {
    fetchData();
  });

  return (
    <Layout className="playlist-new-page" pageTitle="Adicionar contexto" hideDrawerButton={true}>
      <Container className="music-control">
        <Grid container spacing={1}>
          <Grid container item xs={6} spacing={3}>
            <ContextCard title="Musica" icon={<MusicNote />} />
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <ContextCard title="Sentimento" icon={<EmojiEmotions />} />
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <ContextCard title="Localização" icon={<Explore />} />
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <ContextCard title="Atividade" icon={<DirectionsRun />} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

interface CardProps {
  title: string;
  icon: JSX.Element;
}

function ContextCard({ title, icon }: CardProps) {
  return (
    <Card>
      <CardContent>
        {icon}
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
