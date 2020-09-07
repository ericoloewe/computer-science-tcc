import React from "react";

import { Link } from "react-router-dom";
import { MusicNote, EmojiEmotions, LibraryMusic } from "@material-ui/icons";
import { Typography, Container, Grid, Card, CardContent } from "@material-ui/core";

export function ListOfContexts() {
  return (
    <Container className="list-of-contexts">
      <Grid container spacing={1}>
        <Grid container item md={12}>
          <Typography variant="h4" component="h4">
            Informações para ajudar na recomendação
          </Typography>
        </Grid>
        <Grid container item>
          <ContextCard to="/music-search" title="Buscar musica" icon={<MusicNote />} />
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
