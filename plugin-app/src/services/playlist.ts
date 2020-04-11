class PlaylistService {
  saveFeelings(feelings: Feeling[]) {
    console.log("saved", feelings);
  }
}

export interface Feeling {
  id: string | number;
  title: string;
}

export const playlistService = new PlaylistService();
