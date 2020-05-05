import { playlistMock, playlistsMock } from "./__mocks";
import { Feeling } from "./feeling";
import { TimerUtil } from "../utils/timer";
import { BasicPlaylist, Playlist } from "../@types/playlist";

class PlaylistService {
  async rename(playlistId: string, newPlaylistName: string) {
    await TimerUtil.wait(1000);
    console.log("rename", playlistId, newPlaylistName);
  }

  async getNextId(): Promise<string> {
    await TimerUtil.wait(1000);
    return Promise.resolve(`${playlistsMock.length + 1}`);
  }

  async loadAll(): Promise<BasicPlaylist[]> {
    await TimerUtil.wait(1000);
    return Promise.resolve(playlistsMock);
  }

  async load(playlistId: string): Promise<Playlist> {
    await TimerUtil.wait(1000);
    return Promise.resolve(playlistMock);
  }

  async saveFeelings(playlistId: string, feelings: Feeling[]) {
    await TimerUtil.wait(1000);
    console.log("saved", feelings);
  }

  async saveMusics(playlistId: string, musicsToSave: import("../components/choose-with-actions").ChooseItem[]) {
    await TimerUtil.wait(1000);
    console.log("saved", musicsToSave);
  }
}

export const playlistService = new PlaylistService();
