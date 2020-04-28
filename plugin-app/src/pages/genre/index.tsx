import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { genreService, Genre } from "../../services/genre";

export default function () {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
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
    searchGendersOfTexts(searchText); // eslint-disable-next-line
  }, [searchText]);

  async function saveAndGoHome() {
    const gendersToSave = Object.keys(selectedGendersMap).map((k) => selectedGendersMap[k]);
    await genreService.save(gendersToSave as Genre[]);

    history.push(`/`);
  }

  return (
    <Layout className="genre-page" pageTitle="Generos musicais preferidos" hideDrawerButton={true}>
      <Choose
        items={genders}
        onChangeSearch={(s) => setSearchText(s)}
        onChoose={chooseGender}
        searchLabel="Genero musical"
        searchValue={searchText}
      />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Proximo
      </Button>
    </Layout>
  );
}
