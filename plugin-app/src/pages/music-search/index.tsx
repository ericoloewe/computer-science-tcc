import "./style.scss";

import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";
import { useHistory, useParams } from "react-router-dom";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { StringUtil } from "../../utils/string";
import { SearchAppBar } from "./search-app-bar";
import { TimerUtil } from "../../utils/timer";
import { useSearch } from "../../contexts/search";
import { useEvents, EventType } from "../../contexts/event";

const debounce = TimerUtil.debounce(
  (searchText: string, searchMusicsOfTexts: Function) => searchMusicsOfTexts(searchText),
  1200
);

export default function () {
  const history = useHistory();
  let { searchMusic } = useSearch();
  const { save: saveEvent } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [selectedMusicsMap, setSelectedMusics] = useState({} as { [key: string]: string });
  const [musics, setMusics] = useState([] as ChooseItem[]);

  async function goBack() {
    const musicsToSave = Object.keys(selectedMusicsMap).map((k) => selectedMusicsMap[k]);

    if (musicsToSave.length > 0) {
      await saveEvent(EventType.LIKED_MUSIC, musicsToSave.join(";"));
    }

    history.push("/");
  }

  function chooseMusic(music: ChooseItem) {
    if (selectedMusicsMap[music.id] != null) {
      delete selectedMusicsMap[music.id];
    } else {
      selectedMusicsMap[music.id] = music.id;
    }

    setSelectedMusics({ ...selectedMusicsMap });
  }

  function markSelectedMusics(musics: ChooseItem[]) {
    const musicsMappedWithSelected = musics.map((m) => ({ ...m, selected: selectedMusicsMap[m.id] != null }));

    setMusics(musicsMappedWithSelected);
  }

  async function searchMusicsOfTexts(text: string) {
    const musics = await searchMusic(text);
    const parsedMusics = musics.map((m) => ({ ...m, title: m.name, id: m.uri }));

    setMusics([...parsedMusics]);
    markSelectedMusics(parsedMusics);
  }

  useEffect(() => {
    markSelectedMusics(musics); // eslint-disable-next-line
  }, [selectedMusicsMap]);

  useEffect(() => {
    if (!StringUtil.isEmpty(searchText)) {
      debounce(searchText, searchMusicsOfTexts);
    } // eslint-disable-next-line
  }, [searchText]);

  return (
    <article className="music-search-page">
      <SearchAppBar searchText={searchText} onSearchChange={(text) => setSearchText(text)} onBackClick={goBack} />
      <section className="choose-or-description">
        {!!searchText ? (
          <ChooseWithActions
            items={musics}
            actionIcon={<AddIcon />}
            selectedActionIcon={<RemoveIcon />}
            onPressAction={chooseMusic}
          />
        ) : (
          <Typography paragraph>Digite um termo a ser procurado</Typography>
        )}
      </section>
    </article>
  );
}
