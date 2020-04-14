class MessageService {
  alert(message: string): void {
    window.alert(message);
  }
}

export const messageService = new MessageService();
