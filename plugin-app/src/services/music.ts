import { searchMusicsMock } from "./mocks";

class MusicService {
  async play(musicId: string): Promise<void> {
    console.log("Music play", musicId);
  }

  async searchMusic(text: string): Promise<Music[]> {
    return Promise.resolve(searchMusicsMock);
  }

  async toggleFavorite(music: import("../components/choose-with-actions").ChooseItem) {
    console.log("Music favorite toggle", music);
  }
}

export interface CustomImage {
  alt: string;
  src: string;
}

export interface Music {
  id: string;
  name: string;
  image: CustomImage;
  album: Album;
  liked?: boolean;
}

export interface Album {
  id: string;
  name: string;
  image: CustomImage;
}

export const musicService = new MusicService();
