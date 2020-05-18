import React from "react";

import { ChooseItem } from "../../components/choose-with-actions";
import { Music } from "../../@types/music";
import { Loader } from "../../components/loader";
import { Choose } from "../../components/choose";

interface Props {
  musics: Music[];
  onPlayMusic: (m: ChooseItem) => void;
}

export function MusicList({ musics, onPlayMusic }: Props) {
  return musics ? <Choose items={musics.map((m) => ({ ...m, title: m.name }))} onChoose={onPlayMusic} /> : <Loader />;
}
