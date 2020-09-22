import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { AddOptionEvent } from "../../components/add-option-event";
import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { LocationUtil } from "../../utils/location";
import { useEvents, EventType } from "../../contexts/event";
import { useLocation } from "../../contexts/location";
import { cookieService } from "../../services/storage";

const THIRTY_MINUTES = 60 * 30;

export default function () {
  const history = useHistory();
  const { search } = useLocation();
  const { save: saveEvent } = useEvents();
  const [locations, setLocations] = useState([] as ChooseItem[]);
  const [selectedLocationsMap, setSelectedLocations] = useState({} as { [key: string]: ChooseItem });

  function chooseLocation(feeling: ChooseItem) {
    if (selectedLocationsMap[feeling.id] != null) {
      delete selectedLocationsMap[feeling.id];
    } else {
      selectedLocationsMap[feeling.id] = feeling;
    }

    setSelectedLocations({ ...selectedLocationsMap });
  }

  function markSelectedLocations(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedLocationsMap[m.id] != null }));

    setLocations(musicsMappedWithSelected);
  }

  async function saveLocation() {
    const position = await LocationUtil.getPosition();
    const locationAsEventData = JSON.stringify({
      lat: position.coords.latitude,
      lng: position.coords.latitude,
    });

    saveEvent(EventType.LOAD_LOCATION, locationAsEventData);
  }

  async function searchLocationsOfTexts(text: string) {
    const locations = await search(text);
    const parsedLocations = locations.map((a) => ({ id: a.id, title: a.name }));

    setLocations([...parsedLocations]);
    markSelectedLocations(parsedLocations);
  }

  useEffect(() => {
    markSelectedLocations(locations); // eslint-disable-next-line
  }, [selectedLocationsMap]);

  useEffect(() => {
    saveLocation(); // eslint-disable-next-line
    searchLocationsOfTexts(""); // eslint-disable-next-line
  }, []);

  async function saveAndGoHome() {
    const locationsToSave = locations
      .filter((f) => f.selected)
      .map((f) => f.id)
      .join(";");

    await saveEvent(EventType.CHOOSE_LOCATION, locationsToSave);
    cookieService.save(cookieService.CONTEXT_COOKIE_NAME, "true", THIRTY_MINUTES);
    history.push(`/`);
  }

  return (
    <Layout className="playlist-location-page" pageTitle="Onde você está nesse momento?" hideDrawerButton={true}>
      <AddOptionEvent eventType={EventType.CHOOSE_LOCATION} />
      <Choose items={locations} onChoose={chooseLocation} />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Continuar
      </Button>
    </Layout>
  );
}
