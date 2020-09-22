import { LoggerUtil } from "./logger";

export class LocationUtil {
  static getPosition(): Promise<Position> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(position => {
          resolve(position);
        }, error => {
          LoggerUtil.error(error);

          reject('Unable to retrieve your location')
        });
      }
    })
  }
}
