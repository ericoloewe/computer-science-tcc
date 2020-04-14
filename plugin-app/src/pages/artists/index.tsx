import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { artistService, Artist } from "../../services/artist";

export default function () {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [artists, setArtists] = useState([] as ChooseItem[]);
  const [selectedArtistsMap, setSelectedArtists] = useState({} as { [key: string]: ChooseItem });

  function chooseMusic(music: ChooseItem) {
    if (selectedArtistsMap[music.id] != null) {
      delete selectedArtistsMap[music.id];
    } else {
      selectedArtistsMap[music.id] = music;
    }

    setSelectedArtists({ ...selectedArtistsMap });
  }

  function markSelectedMusics(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedArtistsMap[m.id] != null }));

    setArtists(musicsMappedWithSelected);
  }

  async function searchMusicsOfTexts(text: string) {
    const musics = await artistService.search(text);

    setArtists([...musics]);
    markSelectedMusics(musics);
  }

  useEffect(() => {
    markSelectedMusics(artists); // eslint-disable-next-line
  }, [selectedArtistsMap]);

  useEffect(() => {
    searchMusicsOfTexts(searchText); // eslint-disable-next-line
  }, [searchText]);

  async function saveAndGoHome() {
    const artistsToSave = Object.keys(selectedArtistsMap).map((k) => selectedArtistsMap[k]);
    await artistService.save(artistsToSave as Artist[]);

    history.push(`/`);
  }

  return (
    <Layout className="artists-page" pageTitle="Artistas preferidos" hideDrawerButton={true}>
      <Choose
        items={artists}
        onChangeSearch={(s) => setSearchText(s)}
        onChoose={chooseMusic}
        searchLabel="Nome do artista"
        searchValue={searchText}
      />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Proximo
      </Button>
    </Layout>
  );
}
