import { Artist } from "../services/artist";
import { SpotifyArtistsSearchItem, SpotifyTracksSearchItem } from "../react-app-env";
import { MusicMapper } from "./music";

export class SearchMapper {
  static toArtist({ id, name, images }: SpotifyArtistsSearchItem): Artist {
    return {
      id,
      name,
      image: {
        alt: name,
        src: images[0]?.url,
      },
    };
  }

  static toMusic(track: SpotifyTracksSearchItem): import("../services/music").Music {
    return MusicMapper.toMusic(track);
  }
}
