import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { AddOptionEvent } from "../../components/add-option-event";
import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { useActivity } from "../../contexts/activity";
import { useEvents, EventType } from "../../contexts/event";

export default function () {
  const history = useHistory();
  const { search } = useActivity();
  const { save: saveEvent } = useEvents();
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
    searchActivitiesOfTexts(""); // eslint-disable-next-line
  }, []);

  async function saveAndGoHome() {
    const activitiesToSave = activities
      .filter((f) => f.selected)
      .map((f) => f.id)
      .join(";");

    await saveEvent(EventType.CHOOSE_ACTIVITY, activitiesToSave);
    history.push(`/new-context/location`);
  }

  return (
    <Layout className="playlist-activity-page" pageTitle="O que você esta fazendo?" hideDrawerButton={true}>
      <AddOptionEvent eventType={EventType.CHOOSE_ACTIVITY} />
      <Choose items={activities} onChoose={chooseActivity} />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Continuar
      </Button>
    </Layout>
  );
}
