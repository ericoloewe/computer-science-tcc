import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { useEvents, EventType } from "../../contexts/event";
import { useFeeling } from "../../contexts/feeling";

export default function () {
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
      .map((f) => f.title.toLowerCase())
      .join(";");

    await saveEvent(EventType.CHOOSE_FEELING, feelingsToSave);
    history.push(`/`);
  }

  return (
    <Layout className="playlist-feeling-page" pageTitle="O que você esta sentindo?" hideDrawerButton={true}>
      <Choose items={feelings} onChoose={chooseFeeling} />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Salvar
      </Button>
    </Layout>
  );
}
