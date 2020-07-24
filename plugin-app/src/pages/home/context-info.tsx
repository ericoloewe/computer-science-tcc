import React from "react";
import { Container, Card, CardContent, Typography, Grid } from "@material-ui/core";

interface Context {
  title: string;
  description: string;
}

interface Props {
  contexts: Context[];
}

export function ContextInfo({ contexts }: Props) {
  return (
    <Container className="context-info">
      <Grid container spacing={1}>
        {contexts.map((c) => (
          <Grid key={c.title} container item md={6}>
            <ContextCard title={c.title} description={c.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function ContextCard({ title, description }: Context) {
  return (
    <Card className="context-info-card">
      <CardContent className="content">
        <Typography className="title" component="h5" variant="h5">
          {title}
        </Typography>
        <Typography className="description" variant="subtitle1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
