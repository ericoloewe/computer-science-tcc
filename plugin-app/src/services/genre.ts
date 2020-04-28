import { genderMock as genreMock } from "./mocks";
import { messageService } from "./message";
import { TimerUtil } from "../utils/timer";

class GenreService {
  async save(genres: Genre[]) {
    console.log("genres", genres);
    messageService.alert("genres saved");

    await TimerUtil.wait(1000);
  }

  async search(text: string): Promise<Genre[]> {
    await TimerUtil.wait(1000);
    console.log("text", text);

    return Promise.resolve(genreMock);
  }
}

export interface Genre {
  id: string;
  title: string;
}

export const genreService = new GenreService();
