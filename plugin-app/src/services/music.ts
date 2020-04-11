import { searchMusicsMock } from "./mocks";

class MusicService {
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
}

export const musicService = new MusicService();
