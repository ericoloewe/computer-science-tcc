import React from "react";
import { Container, Card, CardContent, Typography, Paper, Grid } from "@material-ui/core";

export function ContextInfo() {
  return (
    <Container className="context-info">
      <Grid container spacing={1}>
        <Grid container item md={6}>
          <ContextCard />
        </Grid>
        <Grid container item md={6}>
          <ContextCard />
        </Grid>
        <Grid container item md={6}>
          <ContextCard />
        </Grid>
      </Grid>
    </Container>
  );
}

function ContextCard() {
  return (
    <Card className="context-info-card">
      <CardContent className="content">
        <Typography className="title" component="h5" variant="h5">
          Contexto N
        </Typography>
        <Typography className="description" variant="subtitle1" color="textSecondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est aliquam voluptas dignissimos eum
          blanditiis distinctio molestiae perferendis culpa. Pariatur sed amet officia incidunt natus impedit fugiat quo
          quia modi.
        </Typography>
      </CardContent>
    </Card>
  );
}
