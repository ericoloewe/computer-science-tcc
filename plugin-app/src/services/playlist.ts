import { Music } from "./music";
import { musicsMock } from "./mocks";

type PlaylistId = string | number;

class PlaylistService {
  async getNextId(): Promise<PlaylistId> {
    return Promise.resolve(1);
  }

  async loadMusics(playlistId: PlaylistId): Promise<Music[]> {
    return Promise.resolve(musicsMock);
  }

  saveFeelings(playlistId: PlaylistId, feelings: Feeling[]) {
    console.log("saved", feelings);
  }
}

export const playlistService = new PlaylistService();
