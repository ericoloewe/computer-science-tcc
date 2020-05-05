import React from "react";
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { Music } from "../../@types/music";
import { Loader } from "../../components/loader";

interface Props {
  onFavoriteMusic: (m: ChooseItem) => void;
  musics: Music[];
  onPlayMusic: (m: ChooseItem) => void;
}

export function MusicsOfPlaylist({ musics, onPlayMusic, onFavoriteMusic }: Props) {
  return musics ? (
    <ChooseWithActions
      actionIcon={<FavoriteBorderIcon />}
      items={musics.map((m) => ({ ...m, title: m.name }))}
      onPress={onPlayMusic}
      onPressAction={onFavoriteMusic}
      selectedActionIcon={<FavoriteIcon />}
    />
  ) : (
    <Loader />
  );
}
