import React from "react";

import { Container, Grid, Button } from "@material-ui/core";
import { ThumbUp, ThumbDown } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { messageService } from "../../services/message";
import { useEvents, EventType } from "../../contexts/event";
import { usePlayer } from "../../contexts/player";

export function LikeOrNotLike() {
  const { playingMusicInfo } = usePlayer();
  const { save: saveEvent } = useEvents();
  const history = useHistory();

  async function saveLikedMusic() {
    await saveEvent(EventType.LIKED_MUSIC, playingMusicInfo?.currentTrack.uri);
    messageService.alert("Informação salva!");
  }

  async function saveHatedMusic() {
    await saveEvent(EventType.HATED_MUSIC, playingMusicInfo?.currentTrack.uri);
    history.push(`/music-search`);
  }

  return (
    <Container className="like-or-not-like">
      <Grid container direction="row" justify="space-around" alignItems="center">
        <Button
          color="primary"
          endIcon={<ThumbUp>send</ThumbUp>}
          onClick={() => saveLikedMusic()}
          size="large"
          variant="contained"
        >
          Gostei
        </Button>
        <Button
          color="secondary"
          endIcon={<ThumbDown>send</ThumbDown>}
          onClick={() => saveHatedMusic()}
          size="large"
          variant="contained"
        >
          Não gostei
        </Button>
      </Grid>
    </Container>
  );
}
