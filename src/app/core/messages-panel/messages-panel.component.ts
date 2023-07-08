import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MessageService } from '../service/message.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessageModel } from '../model/message.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[];
  // messages: MessageModel[];
  readMessages: MessageModel[];
  unreadMessages: MessageModel[];

  showReadMessages: boolean = true;

  @Input() visible: boolean = false;
  @Output() onVisibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private messageService: MessageService) {
    this.subscriptions = [];
    this.readMessages = [];
    this.unreadMessages = [];
  }

  ngOnInit(): void {
    this.subscriptions.push(this.messageService.getReadMessages()
      .subscribe(messages => {
        this.readMessages = messages;
      }))
    this.subscriptions.push(this.messageService.getUnreadMessages()
      .subscribe(messages => {
        this.unreadMessages = messages;
      }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

  public onAcknowledgeAll(): void {
    this.messageService.readAllMessages();
  }

  public toggleVisibility(event: boolean): void {
    this.onVisibilityChange.emit(event);
  }

  public readMessage(event: CheckboxChangeEvent, index: number): void {
    event.originalEvent?.stopPropagation(); // Don't toggle the accordion for checking the check-box
    if (event.checked) {
      this.messageService.readMessage(index);
    } else {
      this.messageService.unreadMessage(index);
    }
  }

  public readAllMessages(): void {
    this.messageService.readAllMessages();
  }

  public unreadAllMessages(): void {
    this.messageService.unreadAllMessages();
  }

  public deleteAllMessages(): void {
    this.messageService.deleteAllMessages();
  }

  public getMessages(): MessageModel[] {
    if (this.showReadMessages) {
      return [...this.unreadMessages, ...this.readMessages];
    }
    return [...this.unreadMessages];
  }

}

