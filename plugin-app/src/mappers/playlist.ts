import { BasicPlaylist, Playlist } from "../services/playlist";
import { PlaylistItem } from "../@types/spotify";
import { StringUtil } from "../utils/string";
import { ImageMapper } from "./image";

export class PlaylistMapper {
  static toPlaylist({
    id,
    name,
    description,
    images,
    tracks,
  }: import("../@types/spotify").SpotifyLoadPlaylistResponse): Playlist {
    return {
      id,
      title: name,
      description: StringUtil.sliceIfNeed(description),
      image: {
        alt: name,
        src: images[0]?.url,
      },
      musics: tracks.items.map((t) => ({
        id: t.track.id,
        image: ImageMapper.toCustom(t.track.name, t.track.album.images),
        name: t.track.name,
        album: {
          id: t.track.album.id,
          name: t.track.album.name,
          image: ImageMapper.toCustom(t.track.album.name, t.track.album.images),
        },
      })),
    };
  }

  static toBasicPlaylist({ id, name, images, description }: PlaylistItem): BasicPlaylist {
    return {
      id,
      title: name,
      description: StringUtil.sliceIfNeed(description),
      image: {
        alt: name,
        src: images[0]?.url,
      },
    };
  }
}
