import { artistMock } from "./mocks";
import { messageService } from "./message";
import { TimerUtil } from "../utils/timer";

class ArtistService {
  async save(artists: Artist[]) {
    console.log("artists", artists);
    messageService.alert("artists saved");

    await TimerUtil.wait(1000);
  }

  async search(text: string): Promise<Artist[]> {
    console.log("text", text);
    await TimerUtil.wait(1000);

    return Promise.resolve(artistMock);
  }
}

export interface Artist {
  id: string | number;
  title: string;
  image: import("./music").Image;
}

export const artistService = new ArtistService();
