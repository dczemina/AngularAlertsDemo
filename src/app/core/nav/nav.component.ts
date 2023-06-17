import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { MessageService } from '../service/message.service';
import { MessageModel } from '../model/message.model';
import { MessageTypeEnum } from '../model/message-type.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[];

  navItems: MenuItem[];


  constructor(private messageService: MessageService) {
    this.subscriptions = [];

    this.navItems = [
      {
        label: 'Dashboard',
        icon: PrimeIcons.TABLE,
        disabled: true
      },
      {
        label: 'Reports',
        icon: PrimeIcons.CHART_BAR,
        disabled: true
      },
      {
        icon: PrimeIcons.BELL,
        badge: '' // blank initially
      }
    ];
  }

  ngOnInit() {
    // Get # of unread messages
    this.subscriptions.push(this.messageService.getUnreadMessages()
      .subscribe(messages => {
        this.navItems[2].badge = (messages.length === 0? '' : messages.length.toString()); // Setting directly because tieing to variable or function does not work as intended
      }
    ));

    // Add placeholder method
    this.messageService.addMessage(new MessageModel(new Date(), "Test", "Message", MessageTypeEnum.info, false, false))
  }

  ngOnDestroy() {
    // Unsubscribe to all subscriptions on component destroy
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
