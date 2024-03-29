import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { AddOptionEvent } from "../../components/add-option-event";
import { Choose, ChooseItem } from "../../components/choose";
import { genreService } from "../../services/genre";
import { Layout } from "../shared/layout";
import { useEvents, EventType } from "../../contexts/event";

export default function () {
  const history = useHistory();
  const { save: saveEvent } = useEvents();
  const [genders, setGenres] = useState([] as ChooseItem[]);
  const [selectedGendersMap, setSelectedGenders] = useState({} as { [key: string]: ChooseItem });

  function chooseGender(genre: ChooseItem) {
    if (selectedGendersMap[genre.id] != null) {
      delete selectedGendersMap[genre.id];
    } else {
      selectedGendersMap[genre.id] = genre;
    }

    setSelectedGenders({ ...selectedGendersMap });
  }

  function markSelectedGenders(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedGendersMap[m.id] != null }));

    setGenres(musicsMappedWithSelected);
  }

  async function searchGendersOfTexts(text: string) {
    const genres = await genreService.search(text);

    setGenres([...genres]);
    markSelectedGenders(genres);
  }

  useEffect(() => {
    markSelectedGenders(genders); // eslint-disable-next-line
  }, [selectedGendersMap]);

  useEffect(() => {
    searchGendersOfTexts(""); // eslint-disable-next-line
  }, []);

  async function saveAndGoHome() {
    const genresToSave = Object.keys(selectedGendersMap)
      .map((k) => selectedGendersMap[k].id)
      .join(";");

    await saveEvent(EventType.LIKED_GENRE, genresToSave);
    history.push(`/`);
  }

  return (
    <Layout className="genre-page" pageTitle="Generos musicais preferidos" hideDrawerButton={true}>
      <AddOptionEvent eventType={EventType.LIKED_GENRE} />
      <Choose items={genders} onChoose={chooseGender} />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Proximo
      </Button>
    </Layout>
  );
}
