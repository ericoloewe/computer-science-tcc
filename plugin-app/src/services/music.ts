import { searchMusicsMock } from "./__mocks";
import { Music } from "../@types/music";

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

export const musicService = new MusicService();
