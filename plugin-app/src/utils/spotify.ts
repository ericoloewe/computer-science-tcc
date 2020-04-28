export interface SpotifyToken {
  accessToken: string;
  expiresInSeconds: number;
  tokenType: string;
}

export class SpotifyUtil {
  static SCOPES = [
    "playlist-read-private",
    "streaming",
    "user-library-read",
    "user-read-email",
    "user-read-private",
    "user-top-read",
  ];

  static createSpotifyAuthUrl(): string {
    if (!process.env.REACT_APP_SPOTIFY_AUTH_URL) {
      throw new Error("you need to set spotify url");
    }

    if (!process.env.REACT_APP_SPOTIFY_CLIENT_ID) {
      throw new Error("you need to set spotify client id");
    }

    var url = new URL(process.env.REACT_APP_SPOTIFY_AUTH_URL);

    url.searchParams.set("client_id", process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    url.searchParams.set("response_type", "token");
    url.searchParams.set("redirect_uri", SpotifyUtil.getSpotifyRedirectUrl());
    url.searchParams.set("scope", this.SCOPES.join(" "));

    return url.toString();
  }

  static getApiUrl(): string {
    return process.env.REACT_APP_SPOTIFY_API_URL || "https://api.spotify.com/v1";
  }

  static getTokenAndInfoFromRedirectUrl(redirectUrl: string): SpotifyToken {
    var url = new URL(redirectUrl);

    url.search = url.hash.slice(1, url.hash.length);

    const accessToken = url.searchParams.get("access_token");
    const expiresInSeconds = Number(url.searchParams.get("expires_in"));
    const tokenType = url.searchParams.get("token_type");

    if (!accessToken || !expiresInSeconds || !tokenType) {
      throw new Error("Invalid redirect parameter");
    }

    return {
      accessToken,
      expiresInSeconds,
      tokenType,
    };
  }

  private static getSpotifyRedirectUrl(): string {
    if (!process.env.REACT_APP_HOST_URL) {
      throw new Error("you need to set spotify client id");
    }

    var url = new URL(process.env.REACT_APP_HOST_URL);

    url.pathname = "/login-redirect-spotify";

    return url.toString();
  }
}
