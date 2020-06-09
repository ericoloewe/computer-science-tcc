import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Choose, ChooseItem } from "../../components/choose";
import { Layout } from "../shared/layout";
import { StringUtil } from "../../utils/string";
import { TimerUtil } from "../../utils/timer";
import { useSearch } from "../../contexts/search";
import { EventType, useEvents } from "../../contexts/event";

const debounce = TimerUtil.debounce(
  (searchText: string, searchArtistsOfTexts: Function) => searchArtistsOfTexts(searchText),
  1200
);

export default function () {
  const history = useHistory();
  const { save: saveEvent } = useEvents();
  const { searchArtists } = useSearch();
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
    let items: ChooseItem[] = [];

    if (!StringUtil.isEmpty(searchText)) {
      const artists = await searchArtists(text);
      items = artists.map((a) => ({ ...a, title: a.name }));

      setArtists([...items]);
      markSelectedArtists(items);
    }

    setArtists([...items]);
  }

  useEffect(() => {
    markSelectedArtists(artists); // eslint-disable-next-line
  }, [selectedArtistsMap]);

  useEffect(() => {
    debounce(searchText, searchArtistsOfTexts); // eslint-disable-next-line
  }, [searchText]);

  async function saveAndGoHome() {
    const genresToSave = Object.keys(selectedArtistsMap)
      .map((k) => selectedArtistsMap[k].id)
      .join(";");

    await saveEvent(EventType.LIKED_ARTIST, genresToSave);
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
