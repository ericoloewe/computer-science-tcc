import { ImageMapper } from "./image";
import { Music, Album } from "../@types/music";
import { SpotifyTracksSearchItem, SpotifyImage } from "../@types/spotify";

export class MusicMapper {
  static toMusicTrack({ name, album, uri }: Spotify.Track): Music {
    return {
      id: uri,
      image: ImageMapper.toCustom(name, album.images as SpotifyImage[]),
      name,
      album: {
        id: album.uri,
        name: album.name,
        image: ImageMapper.toCustom(album.name, album.images as SpotifyImage[]),
      },
      uri,
    };
  }

  static toMusic({ id, name, album, uri }: SpotifyTracksSearchItem): Music {
    return {
      id,
      image: ImageMapper.toCustom(name, album.images),
      name,
      album: {
        id: album.id,
        name: album.name,
        image: ImageMapper.toCustom(album.name, album.images),
      },
      uri,
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
