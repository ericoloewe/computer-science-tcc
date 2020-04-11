import { feelingsMock } from "./mocks";

class FeelingService {
  async load(): Promise<Feeling[]> {
    return Promise.resolve(feelingsMock);
  }
}

export interface Feeling {
  id: number | string;
  title: string;
}

export const feelingService = new FeelingService();
