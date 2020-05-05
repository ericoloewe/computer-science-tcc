import { BasicPlaylist, Playlist } from "../@types/playlist";
import { PlaylistItem } from "../@types/spotify";
import { StringUtil } from "../utils/string";
import { MusicMapper } from "./music";

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
      musics: tracks.items.map((t) => MusicMapper.toMusic(t.track)),
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
