import { Music, CustomImage } from "./music";

export interface BasicPlaylist {
  id: string;
  title: string;
  description: string;
  image: CustomImage;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  image: CustomImage;
  musics: Music[];
}
