import React from "react";

import { Link } from "react-router-dom";
import { MusicNote, EmojiEmotions, Explore, DirectionsRun } from "@material-ui/icons";
import { Typography, Container, Grid, Card, CardContent } from "@material-ui/core";

export function ListOfContexts() {
  return (
    <Container className="list-of-contexts">
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
