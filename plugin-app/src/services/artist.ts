import { messageService } from "./message";
import { TimerUtil } from "../utils/timer";

class ArtistService {
  async save(artists: string[]) {
    console.log("artists", artists);
    messageService.alert("artists saved");

    await TimerUtil.wait(1000);
  }
}

export interface Artist {
  id: string;
  name: string;
  image: import("./music").Image;
}

export const artistService = new ArtistService();
