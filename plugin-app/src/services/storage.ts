class CookieService {
  delete(key: string): void {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  get(key: string): string {
    const { cookie } = document;

    let value = "";

    if (cookie.includes(key)) {
      const start = cookie.indexOf(key);

      value = cookie.substring(start).split(";", 1)[0].split("=")[1];
    }

    return decodeURIComponent(value);
  }

  save(key: string, value: string, expiresInSeconds?: number): void {
    let expires = "";

    if (!!expiresInSeconds) {
      const date = new Date();
      date.setTime(date.getTime() + expiresInSeconds * 1000);
      expires = "; expires=" + date.toUTCString();
    }

    document.cookie = `${key}=${value}${expires}; path=/`;
  }
}

export const cookieService = new CookieService();
