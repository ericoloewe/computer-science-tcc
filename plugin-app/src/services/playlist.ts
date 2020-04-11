import { playlistMusicsMock, playlistsMock } from "./mocks";
import { Music, Image } from "./music";
import { Feeling } from "./feeling";

type PlaylistId = string | number;

export interface Playlist {
  id: string | number;
  title: string;
  description: string;
  image: Image;
}

class PlaylistService {
  async getNextId(): Promise<PlaylistId> {
    return Promise.resolve(playlistsMock.length + 1);
  }

  async load(): Promise<Playlist[]> {
    return Promise.resolve(playlistsMock);
  }

  async loadMusics(playlistId: PlaylistId): Promise<Music[]> {
    return Promise.resolve(playlistMusicsMock);
  }

  saveFeelings(playlistId: PlaylistId, feelings: Feeling[]) {
    console.log("saved", feelings);
  }
}

export const playlistService = new PlaylistService();
