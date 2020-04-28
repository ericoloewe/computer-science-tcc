import { Artist } from "../services/artist";
import { SearchItem } from "../react-app-env";

export class SearchMapper {
  static toArtist({ id, name, images }: SearchItem): Artist {
    return {
      id,
      name,
      image: {
        alt: name,
        src: images[0]?.url,
      },
    };
  }
}
