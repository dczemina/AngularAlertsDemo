import { Injectable } from '@angular/core';
import { MessageModel } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messagesModalVisible: boolean = false;
  messages: MessageModel[];

  constructor() {
    this.messages = [];
  }

  public getMessages(): MessageModel[] {
    return this.messages;
  }

  public addMessage(message: MessageModel) {
    this.messages = [...this.messages, message];
  }

  public removeMessage(messageToDelete: MessageModel) {
    console.debug('Not implemented');
    this.messages = this.messages.filter(message => {
      return !message.equals(messageToDelete);
    })
  }

  public readMessage(message: MessageModel): void {
    message.setRead(true);
  }

  public readAllMessages(): void {
    this.messages.forEach(message => {
      message.setRead(true);
    });
  }

  public unreadAllMessages(): void {
    this.messages.forEach(message => {
      message.setRead(false);
    });
  }

  public unreadMessage(message: MessageModel): void {
    message.setRead(false);
  }

  setMessagesModalVisibility(state: boolean): void {
    this.messagesModalVisible = state;
  }

  getMessagesModalVisibility(): boolean {
    return this.messagesModalVisible;
  }
}
