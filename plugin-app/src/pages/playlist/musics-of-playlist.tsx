import React from "react";

import { ChooseItem } from "../../components/choose-with-actions";
import { Music } from "../../@types/music";
import { Loader } from "../../components/loader";
import { Choose } from "../../components/choose";

interface Props {
  onFavoriteMusic: (m: ChooseItem) => void;
  musics: Music[];
  onPlayMusic: (m: ChooseItem) => void;
}

export function MusicsOfPlaylist({ musics, onPlayMusic, onFavoriteMusic }: Props) {
  return musics ? (
    <Choose
      items={musics.map((m) => ({ ...m, title: m.name }))}
      onChoose={onPlayMusic}
    />
  ) : (
    <Loader />
  );
}
