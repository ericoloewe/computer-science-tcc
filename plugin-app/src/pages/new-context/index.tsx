import "./style.scss";

import React, { useEffect } from "react";
import { Typography, Container, Grid, Card, CardContent } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

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
            <Link to="/new-context/music-search">
              <ContextCard title="Musica" icon={<MusicNote />} />
            </Link>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Link to="/new-context/feeling">
              <ContextCard title="Sentimento" icon={<EmojiEmotions />} />
            </Link>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Link to="/new-context/location">
              <ContextCard title="Localização" icon={<Explore />} />
            </Link>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Link to="/new-context/activity">
              <ContextCard title="Atividade" icon={<DirectionsRun />} />
            </Link>
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
