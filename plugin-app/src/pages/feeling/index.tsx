import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { feelingService } from "../../services/feeling";
import { Layout } from "../shared/layout";
import { playlistService } from "../../services/playlist";
import { StringUtil } from "../../utils/string";
import { useEvents, EventType } from "../../contexts/event";

export default function () {
  const history = useHistory();
  const { save: saveEvent } = useEvents();
  const [searchText, setSearchText] = useState("");
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
    const feelings = await feelingService.search(text);

    setFeelings([...feelings]);
    markSelectedFeelings(feelings);
  }

  useEffect(() => {
    markSelectedFeelings(feelings); // eslint-disable-next-line
  }, [selectedFeelingsMap]);

  useEffect(() => {
    searchFeelingsOfTexts(searchText); // eslint-disable-next-line
  }, [searchText]);

  async function saveAndGoToPlaylist() {
    const feelingsToSave = feelings
      .filter((f) => f.selected)
      .map((f) => f.title)
      .join(";");

    await saveEvent(EventType.CHOOSE_FEELING, feelingsToSave);
    history.push(`/`);
  }

  return (
    <Layout className="playlist-feeling-page" pageTitle="O que você esta sentindo?" hideDrawerButton={true}>
      <Choose
        items={feelings}
        onChangeSearch={(s) => setSearchText(s)}
        onChoose={chooseFeeling}
        searchLabel="Sentimentos"
        searchValue={searchText}
      />
      <Button variant="contained" color="primary" onClick={saveAndGoToPlaylist}>
        Proximo
      </Button>
    </Layout>
  );
}
