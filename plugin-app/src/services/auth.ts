import { messageService } from "./message";

class AuthService {
  async login(username: string, password: string): Promise<void> {
    messageService.alert(`login => ${username}, ${password}`);

    await Promise.resolve();
  }

  async logout(): Promise<void> {
    messageService.alert("logout");

    await Promise.resolve();
  }
}

export const authService = new AuthService();
