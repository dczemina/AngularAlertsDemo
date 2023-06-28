import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MessageService } from '../service/message.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessageModel } from '../model/message.model';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[];
  messages: MessageModel[];

  @Input() visible: boolean = false;
  @Output() onVisibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private messageService: MessageService) {
    this.subscriptions = [];
    this.messages = [];
  }

  ngOnInit(): void {

    this.subscriptions.push(this.messageService.getMessages()
      .subscribe(messages => {
        this.messages = messages;
      }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })
  }

  public onAcknowledgeAll(): void {
    this.messageService.readAllMessages();
  }

  public toggleVisibility(event: boolean): void {
    this.onVisibilityChange.emit(event);
  }

  public readMessage(index: number): void {
    console.log(index);
    this.messageService.readMessage(index);
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

}
