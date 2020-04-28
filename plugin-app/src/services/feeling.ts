import { feelingsMock } from "./mocks";
import { TimerUtil } from "../utils/timer";

class FeelingService {
  async search(text: string): Promise<Feeling[]> {
    await TimerUtil.wait(1000);
    console.log("text", text);

    return Promise.resolve(feelingsMock);
  }
}

export interface Feeling {
  id: string;
  title: string;
}

export const feelingService = new FeelingService();
