import { SpotifyImage } from "../@types/spotify";
import { CustomImage } from "../services/music";

export class ImageMapper {
  static toCustom(alt: string, images: SpotifyImage[]): CustomImage {
    return {
      alt,
      src: images[0]?.url,
    };
  }
}
