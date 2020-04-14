import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { genderService, Gender } from "../../services/gender";

export default function () {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [genders, setGenders] = useState([] as ChooseItem[]);
  const [selectedGendersMap, setSelectedGenders] = useState({} as { [key: string]: ChooseItem });

  function chooseGender(gender: ChooseItem) {
    if (selectedGendersMap[gender.id] != null) {
      delete selectedGendersMap[gender.id];
    } else {
      selectedGendersMap[gender.id] = gender;
    }

    setSelectedGenders({ ...selectedGendersMap });
  }

  function markSelectedGenders(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedGendersMap[m.id] != null }));

    setGenders(musicsMappedWithSelected);
  }

  async function searchGendersOfTexts(text: string) {
    const genders = await genderService.search(text);

    setGenders([...genders]);
    markSelectedGenders(genders);
  }

  useEffect(() => {
    markSelectedGenders(genders); // eslint-disable-next-line
  }, [selectedGendersMap]);

  useEffect(() => {
    searchGendersOfTexts(searchText); // eslint-disable-next-line
  }, [searchText]);

  async function saveAndGoHome() {
    const gendersToSave = Object.keys(selectedGendersMap).map((k) => selectedGendersMap[k]);
    await genderService.save(gendersToSave as Gender[]);

    history.push(`/`);
  }

  return (
    <Layout className="gender-page" pageTitle="Generos musicais preferidos" hideDrawerButton={true}>
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
