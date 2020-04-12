import { searchMusicsMock } from "./mocks";

class MusicService {
  async play(music: import("../components/choose-with-actions").ChooseItem): Promise<void> {
    console.log("Music play", music);
  }

  async searchMusic(text: string): Promise<Music[]> {
    return Promise.resolve(searchMusicsMock);
  }
}

export interface Image {
  alt: string;
  src: string;
}

export interface Music {
  id: string | number;
  title: string;
  description: string;
  image: Image;
  liked?: boolean;
}

export const musicService = new MusicService();
