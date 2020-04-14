export class TimerUtil {
  static async wait(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
  }
}
