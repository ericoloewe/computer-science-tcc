import { genderMock } from "./mocks";
import { messageService } from "./message";
import { TimerUtil } from "../utils/timer";

class GenderService {
  async save(genders: Gender[]) {
    console.log("genders", genders);
    messageService.alert("genders saved");

    await TimerUtil.wait(1000);
  }

  async search(text: string): Promise<Gender[]> {
    await TimerUtil.wait(1000);
    console.log("text", text);

    return Promise.resolve(genderMock);
  }
}

export interface Gender {
  id: string | number;
  title: string;
}

export const genderService = new GenderService();
