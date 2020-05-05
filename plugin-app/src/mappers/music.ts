import { ImageMapper } from "./image";
import { Music, Album } from "../services/music";
import { SpotifyTracksSearchItem } from "../@types/spotify";

export class MusicMapper {
  static toMusic({ id, name, album }: SpotifyTracksSearchItem): Music {
    return {
      id,
      image: ImageMapper.toCustom(name, album.images),
      name,
      album: {
        id: album.id,
        name: album.name,
        image: ImageMapper.toCustom(album.name, album.images),
      },
    };
  }

  static toAlbum({ id, name, images }: import("../@types/spotify").SpotifyAlbum): Album {
    return {
      id,
      name,
      image: ImageMapper.toCustom(name, images),
    };
  }
}
