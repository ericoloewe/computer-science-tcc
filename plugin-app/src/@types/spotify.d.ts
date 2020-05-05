export enum SpotifyObjectType {
  Album = "album",
  Artist = "artist",
  Compilation = "compilation",
  Playlist = "playlist",
  Single = "single",
  Track = "track",
  User = "user",
}

export interface SpotifyLoadPlaylistResponse {
  collaborative: boolean;
  description: string;
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyTracks;
  type: SpotifyObjectType;
  uri: string;
}

export interface SpotifyExternalUrls {
  spotify: string;
}

export interface SpotifyFollowers {
  href: null;
  total: number;
}
export interface SpotifyOwner {
  display_name?: string;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  type: SpotifyObjectType;
  uri: string;
  name?: string;
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
  added_by: SpotifyOwner;
  is_local: boolean;
  primary_color: null;
  track: SpotifyTrack;
  video_thumbnail: SpotifyVideoThumbnail;
}
export interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyOwner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: SpotifyExternalIDS;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: SpotifyObjectType;
  uri: string;
}
export interface SpotifyAlbum {
  album_type: SpotifyObjectType;
  artists: SpotifyOwner[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: Date;
  release_date_precision: SpotifyReleaseDatePrecision;
  total_tracks: number;
  type: SpotifyObjectType;
  uri: string;
}

export enum SpotifyReleaseDatePrecision {
  Day = "day",
}
export interface SpotifyExternalIDS {
  isrc: string;
}

export interface SpotifyVideoThumbnail {
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
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPlaylistTracks;
  type: SpotifyObjectType;
  uri: string;
}
export interface SpotifyOwner {
  display_name: string;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  type: SpotifyObjectType;
  uri: string;
}
export interface SpotifyPlaylistTracks {
  href: string;
  total: number;
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
  external_ids: SpotifyExternalIDS;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: SpotifyObjectType;
  uri: string;
}
export interface SpotifyArtistsSearchItem {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: SpotifyObjectType;
  uri: string;
}
export interface SpotifyExternalUrls {
  spotify: string;
}
export interface SpotifyFollowers {
  href: null;
  total: number;
}

export interface SpotifyUserGetResponse {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product: string;
  type: SpotifyObjectType;
  uri: string;
}
export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}
export interface SpotifyExternalUrls {
  spotify: string;
}
export interface SpotifyFollowers {
  href: null;
  total: number;
}
export interface SpotifyImage {
  height: null;
  url: string;
  width: null;
}
