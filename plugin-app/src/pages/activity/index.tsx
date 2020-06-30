import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { useEvents, EventType } from "../../contexts/event";
import { useActivity } from "../../contexts/activity";

export default function () {
  const history = useHistory();
  const { search } = useActivity();
  const { save: saveEvent } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [activities, setActivities] = useState([] as ChooseItem[]);
  const [selectedActivitiesMap, setSelectedActivities] = useState({} as { [key: string]: ChooseItem });

  function chooseActivity(feeling: ChooseItem) {
    if (selectedActivitiesMap[feeling.id] != null) {
      delete selectedActivitiesMap[feeling.id];
    } else {
      selectedActivitiesMap[feeling.id] = feeling;
    }

    setSelectedActivities({ ...selectedActivitiesMap });
  }

  function markSelectedActivities(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedActivitiesMap[m.id] != null }));

    setActivities(musicsMappedWithSelected);
  }

  async function searchActivitiesOfTexts(text: string) {
    const activities = await search(text);
    const parsedActivities = activities.map((a) => ({ id: a.id, title: a.name }));

    setActivities([...parsedActivities]);
    markSelectedActivities(parsedActivities);
  }

  useEffect(() => {
    markSelectedActivities(activities); // eslint-disable-next-line
  }, [selectedActivitiesMap]);

  useEffect(() => {
    searchActivitiesOfTexts(searchText); // eslint-disable-next-line
  }, [searchText]);

  async function saveAndGoHome() {
    const activitiesToSave = activities
      .filter((f) => f.selected)
      .map((f) => f.title.toLowerCase())
      .join(";");

    await saveEvent(EventType.CHOOSE_ACTIVITY, activitiesToSave);
    history.push(`/`);
  }

  return (
    <Layout className="playlist-activity-page" pageTitle="O que você esta fazendo?" hideDrawerButton={true}>
      <Choose
        items={activities}
        onChangeSearch={(s) => setSearchText(s)}
        onChoose={chooseActivity}
        searchLabel="Atividades"
        searchValue={searchText}
      />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Salvar
      </Button>
    </Layout>
  );
}
