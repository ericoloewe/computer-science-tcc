import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { AddOptionEvent } from "../../components/add-option-event";
import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { useEvents, EventType } from "../../contexts/event";
import { useFeeling } from "../../contexts/feeling";

interface Props {
  type: "feeling" | "want-to-fell-like";
}

export default function ({ type }: Props) {
  const history = useHistory();
  const { search } = useFeeling();
  const { save: saveEvent } = useEvents();
  const [feelings, setFeelings] = useState([] as ChooseItem[]);
  const [selectedFeelingsMap, setSelectedFeelings] = useState({} as { [key: string]: ChooseItem });

  function chooseFeeling(feeling: ChooseItem) {
    if (selectedFeelingsMap[feeling.id] != null) {
      delete selectedFeelingsMap[feeling.id];
    } else {
      selectedFeelingsMap[feeling.id] = feeling;
    }

    setSelectedFeelings({ ...selectedFeelingsMap });
  }

  function markSelectedFeelings(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedFeelingsMap[m.id] != null }));

    setFeelings(musicsMappedWithSelected);
  }

  async function searchFeelingsOfTexts(text: string) {
    const feelings = await search(text);
    const parsedFeelings = feelings.map((f) => ({ id: f.id, title: f.name }));

    setFeelings([...parsedFeelings]);
    markSelectedFeelings(parsedFeelings);
  }

  useEffect(() => {
    markSelectedFeelings(feelings); // eslint-disable-next-line
  }, [selectedFeelingsMap]);

  useEffect(() => {
    searchFeelingsOfTexts(""); // eslint-disable-next-line
  }, []);

  async function saveAndGoHome() {
    const feelingsToSave = feelings
      .filter((f) => f.selected)
      .map((f) => f.id)
      .join(";");

    const eventType = type === "feeling" ? EventType.CHOOSE_FEELING : EventType.CHOOSE_FEELING_TO_BE_LIKE;
    const routeToGo = type === "feeling" ? `/new-context/want-to-fell-like` : `/new-context/activity`;

    await saveEvent(eventType, feelingsToSave);
    history.push(routeToGo);
  }

  return (
    <Layout
      className="playlist-feeling-page"
      pageTitle={type === "feeling" ? "Estou me sentindo" : "Quero me sentir"}
      hideDrawerButton={true}
    >
      <AddOptionEvent eventType={EventType.CHOOSE_FEELING} />
      <Choose items={feelings} onChoose={chooseFeeling} />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Continuar
      </Button>
    </Layout>
  );
}
