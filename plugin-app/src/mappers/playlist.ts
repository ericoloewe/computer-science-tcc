import { BasicPlaylist } from "../services/playlist";
import { PlaylistItem } from "../react-app-env";
import { StringUtil } from "../utils/string";

export class PlaylistMapper {
  static toPlaylist({ id, name, images, description }: PlaylistItem): BasicPlaylist {
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
