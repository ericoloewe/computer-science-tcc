import "./style.scss";
import React, { useState } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { EventType, useEvents } from "../../contexts/event";
import { StringUtil } from "../../utils/string";

interface Props {
  eventType: EventType;
}

export function AddOptionEvent({ eventType }: Props): React.ReactElement {
  const [optionText, setOption] = useState<string>("");
  const { save: saveEvent } = useEvents();

  async function saveEventAndClean(text: string) {
    saveEvent(eventType, StringUtil.toKebabCase(text));
  }

  return (
    <>
      {process.env.REACT_APP_ENABLE_CUSTOM_OPTION === "true" ? (
        <Container className="add-option-event-component">
          <Grid container spacing={1}>
            <Grid container item md={9}>
              <TextField label="Novo item" onChange={(e) => setOption(e.target.value)} value={optionText} fullWidth />
            </Grid>
            <Grid container item md={3}>
              <Button variant="contained" color="default" onClick={() => saveEventAndClean(optionText)} fullWidth>
                Salvar novo item
              </Button>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
}
