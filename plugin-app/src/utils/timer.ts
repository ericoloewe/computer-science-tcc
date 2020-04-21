export class TimerUtil {
  static debounce(callback: Function, wait: number): Function {
    let timeout: NodeJS.Timeout | null;

    return (...params: any[]): void => {
      if (timeout != null) {
        clearTimeout(timeout);
      }

      timeout = setTimeout((): void => {
        timeout = null;
        callback(...params);
      }, wait);
    };
  }

  static async wait(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
  }
}
