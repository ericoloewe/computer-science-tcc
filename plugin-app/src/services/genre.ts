import { messageService } from "./message";
import { requestService } from "./request";
import { StringUtil } from "../utils/string";
import { TimerUtil } from "../utils/timer";

class GenreService {
  async save(genres: Genre[]) {
    console.log("genres", genres);
    messageService.alert("genres saved");

    await TimerUtil.wait(1000);
  }

  async search(text: string): Promise<Genre[]> {
    const { data } = await requestService.get<string[]>("/genres.json");

    return data
      .filter((l) => !text || l.toLowerCase().includes(text?.toLowerCase()))
      .map((l) => ({
        id: StringUtil.toKebabCase(l),
        title: l,
      }));
  }
}

export interface Genre {
  id: string;
  title: string;
}

export const genreService = new GenreService();
