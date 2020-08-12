import { Artist } from "../services/artist";
import { SpotifyArtistsSearchItem, SpotifyTracksSearchItem } from "../@types/spotify";
import { MusicMapper } from "./music";

export class SearchMapper {
  static toArtist({ uri, name, images }: SpotifyArtistsSearchItem): Artist {
    return {
      id: uri,
      name,
      image: {
        alt: name,
        src: images[0]?.url,
      },
    };
  }

  static toMusic(track: SpotifyTracksSearchItem): import("../@types/music").Music {
    return MusicMapper.toMusic(track);
  }
}
