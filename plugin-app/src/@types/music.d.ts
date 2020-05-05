export interface CustomImage {
  alt: string;
  src: string;
}
export interface Music {
  id: string;
  name: string;
  image: CustomImage;
  album: Album;
  uri: string;
  liked?: boolean;
}
export interface Album {
  id: string;
  name: string;
  image: CustomImage;
}
