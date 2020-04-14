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

  function chooseArtist(artist: ChooseItem) {
    if (selectedArtistsMap[artist.id] != null) {
      delete selectedArtistsMap[artist.id];
    } else {
      selectedArtistsMap[artist.id] = artist;
    }

    setSelectedArtists({ ...selectedArtistsMap });
  }

  function markSelectedArtists(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedArtistsMap[m.id] != null }));

    setArtists(musicsMappedWithSelected);
  }

  async function searchArtistsOfTexts(text: string) {
    const musics = await artistService.search(text);

    setArtists([...musics]);
    markSelectedArtists(musics);
  }

  useEffect(() => {
    markSelectedArtists(artists); // eslint-disable-next-line
  }, [selectedArtistsMap]);

  useEffect(() => {
    searchArtistsOfTexts(searchText); // eslint-disable-next-line
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
        onChoose={chooseArtist}
        searchLabel="Nome do artista"
        searchValue={searchText}
      />
      <Button variant="contained" color="primary" onClick={saveAndGoHome}>
        Proximo
      </Button>
    </Layout>
  );
}
