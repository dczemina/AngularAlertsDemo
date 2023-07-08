import { Injectable } from '@angular/core';
import { MessageModel } from '../model/message.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Messages Array - contains all of the messages
  messages: BehaviorSubject<MessageModel[]> = new BehaviorSubject<MessageModel[]>([]);
  unreadMessages: BehaviorSubject<MessageModel[]> = new BehaviorSubject<MessageModel[]>([]);
  readMessages: BehaviorSubject<MessageModel[]> = new BehaviorSubject<MessageModel[]>([]);

  // Length of Messages Array - used for notifications
  messagesLength: Subject<number> = new Subject<number>();
  obsMessagesLength: Observable<number> = this.messagesLength.asObservable();

  // Visibility of the modal
  messagesModalVisible: Subject<boolean> = new Subject<boolean>();
  obsMessagesModelVisible: Observable<boolean> = this.messagesModalVisible.asObservable();

  constructor() {
    this.messagesLength.next(this.messages.getValue().length);
  }

  public getMessages(): Observable<MessageModel[]> {
    return this.messages;
  }

  public getUnreadMessages(): Observable<MessageModel[]> {
    return this.unreadMessages;
  }

  public getReadMessages(): Observable<MessageModel[]> {
    return this.readMessages;
  }

  public addMessage(message: MessageModel): void {
    this.messages.next([...this.messages.getValue(), message]);
    this.determineMessageStatus();
  }

  public deleteMessage(messageToDelete: MessageModel): void {
    this.messages.next(this.messages.getValue().filter(message => {
      return !message.equals(messageToDelete);
    }));
    this.determineMessageStatus();
  }

  public deleteAllMessages(): void {
    this.messages.next([]);
    this.determineMessageStatus();
  }

  public readMessage(uid: number): void {
    this.unreadMessages.getValue().forEach((message) => {
      if (message.getUid() === uid) {
        message.setRead(true);
        return; // no need to iterate remaining items
      }
    });
    this.determineMessageStatus();
  }

  public readAllMessages(): void {
    this.messages.getValue().forEach(message => {
      message.setRead(true);
    });
    this.determineMessageStatus();
  }

  public unreadAllMessages(): void {
    this.messages.getValue().forEach(message => {
      message.setRead(false);
    });
    this.determineMessageStatus();
  }

  public unreadMessage(uid: number): void {
    this.messages.getValue().forEach((message) => {
      if (message.getUid() === uid) {
        message.setRead(false);
        return; // no need to iterate remaining items
      }
    });
    this.determineMessageStatus();
  }

  public setMessagesModalVisibility(state: boolean): void {
    this.messagesModalVisible.next(state);
  }

  private determineMessageStatus(): void {
    this.unreadMessages.next(this.messages.getValue().filter(message => {
      return message.getRead() === false;
    }));
    this.readMessages.next(this.messages.getValue().filter(message => {
      return message.getRead() === true;
    }));
  }
}
