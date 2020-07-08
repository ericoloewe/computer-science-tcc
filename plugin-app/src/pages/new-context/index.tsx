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
      <Container>
        <Grid container spacing={1}>
          <Grid container item md={6}>
            <ContextCard to="/new-context/music-search" title="Musica" icon={<MusicNote />} />
          </Grid>
          <Grid container item md={6}>
            <ContextCard to="/new-context/feeling" title="Sentimento" icon={<EmojiEmotions />} />
          </Grid>
          <Grid container item md={6}>
            <ContextCard to="/new-context/location" title="Localização" icon={<Explore />} />
          </Grid>
          <Grid container item md={6}>
            <ContextCard to="/new-context/activity" title="Atividade" icon={<DirectionsRun />} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

interface CardProps {
  icon: JSX.Element;
  title: string;
  to: string;
}

function ContextCard({ title, icon, to }: CardProps) {
  return (
    <Card className="context-card">
      <Link to={to}>
        <CardContent className="content-card-content">
          {icon}
          <Typography className="title" component="h5" variant="h5">
            {title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
