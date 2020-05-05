/// <reference types="react-scripts" />

export interface SpotifyLoadPlaylistResponse {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyTracks;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface Owner {
  display_name?: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: OwnerType;
  uri: string;
  name?: string;
}

export enum OwnerType {
  Artist = "artist",
  User = "user",
}

export interface SpotifyTracks {
  href: string;
  items: SpotifyTracksItem[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface SpotifyTracksItem {
  added_at: Date;
  added_by: Owner;
  is_local: boolean;
  primary_color: null;
  track: SpotifyTrack;
  video_thumbnail: VideoThumbnail;
}

export interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: Owner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: TrackType;
  uri: string;
}

export interface SpotifyAlbum {
  album_type: SpotifyAlbumTypeEnum;
  artists: Owner[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: SpotifyAlbumTypeEnum;
  uri: string;
}

export enum SpotifyAlbumTypeEnum {
  Album = "album",
  Compilation = "compilation",
  Single = "single",
}

export enum ReleaseDatePrecision {
  Day = "day",
}

export interface ExternalIDS {
  isrc: string;
}

export enum TrackType {
  Track = "track",
}

export interface VideoThumbnail {
  url: null;
}

export interface SpotifyLoadUserPlaylistsResponse {
  href: string;
  items: PlaylistItem[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface PlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPlaylistTracks;
  type: ItemType;
  uri: string;
}

export interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: OwnerType;
  uri: string;
}

export enum OwnerType {
  User = "user",
}

export interface SpotifyPlaylistTracks {
  href: string;
  total: number;
}

export enum ItemType {
  Playlist = "playlist",
}

export interface SpotifySearchResponse {
  artists?: SpotifyPagingSearch<SpotifyArtistsSearchItem>;
  tracks?: SpotifyPagingSearch<SpotifyTracksSearchItem>;
}

export interface SpotifyPagingSearch<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface SpotifyTracksSearchItem {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: ItemType;
  uri: string;
}

export interface SpotifyArtistsSearchItem {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: Type;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export enum Type {
  Artist = "artist",
}

export interface SpotifyUserGetResponse {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product: string;
  type: string;
  uri: string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface SpotifyImage {
  height: null;
  url: string;
  width: null;
}
