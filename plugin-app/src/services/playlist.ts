import { playlistMock, playlistsMock } from "./mocks";
import { Music, Image } from "./music";
import { Feeling } from "./feeling";
import { TimerUtil } from "../utils/timer";

type PlaylistId = string | number;

export interface BasicPlaylist {
  id: string | number;
  title: string;
  description: string;
  image: Image;
}

export interface Playlist {
  id: string | number;
  title: string;
  description: string;
  image: Image;
  musics: Music[];
}

class PlaylistService {
  async rename(playlistId: string, newPlaylistName: string) {
    await TimerUtil.wait(1000);
    console.log("rename", playlistId, newPlaylistName);
  }

  async getNextId(): Promise<PlaylistId> {
    await TimerUtil.wait(1000);
    return Promise.resolve(playlistsMock.length + 1);
  }

  async loadAll(): Promise<BasicPlaylist[]> {
    await TimerUtil.wait(1000);
    return Promise.resolve(playlistsMock);
  }

  async load(playlistId: PlaylistId): Promise<Playlist> {
    await TimerUtil.wait(1000);
    return Promise.resolve(playlistMock);
  }

  async saveFeelings(playlistId: PlaylistId, feelings: Feeling[]) {
    await TimerUtil.wait(1000);
    console.log("saved", feelings);
  }

  async saveMusics(playlistId: PlaylistId, musicsToSave: import("../components/choose-with-actions").ChooseItem[]) {
    await TimerUtil.wait(1000);
    console.log("saved", musicsToSave);
  }
}

export const playlistService = new PlaylistService();
