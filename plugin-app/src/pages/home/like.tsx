import React from "react";

import { ThumbUp, ThumbDown } from "@material-ui/icons";
import { Container, Grid, Button } from "@material-ui/core";

export function LikeOrNotLike() {
  return (
    <Container className="like-or-not-like">
      <Grid container direction="row" justify="space-around" alignItems="center">
        <Button variant="contained" color="primary" size="large" endIcon={<ThumbUp>send</ThumbUp>}>
          Gostei
        </Button>
        <Button variant="contained" color="secondary" size="large" endIcon={<ThumbDown>send</ThumbDown>}>
          Não gostei
        </Button>
      </Grid>
    </Container>
  );
}
