import React from "react";
import { Container, Card, CardContent, Typography, Paper, Grid } from "@material-ui/core";

export function ContextInfo() {
  return (
    <Container className="music-control">
      <Grid container spacing={1}>
        <Grid container item xs={6} spacing={3}>
          <ContextCard />
        </Grid>
        <Grid container item xs={6} spacing={3}>
          <ContextCard />
        </Grid>
        <Grid container item xs={6} spacing={3}>
          <ContextCard />
        </Grid>
      </Grid>
    </Container>
  );
}

function ContextCard() {
  return (
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          Contexto N
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Valor N
        </Typography>
      </CardContent>
    </Card>
  );
}
