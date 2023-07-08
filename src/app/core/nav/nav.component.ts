import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { MessageService } from '../service/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[];

  navItems: MenuItem[];

  toggleMessageBarVisibility: boolean;

  notificationCount: string;

  constructor(private messageService: MessageService) {
    this.subscriptions = [];

    this.notificationCount = '';
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
      }
    ];

    this.toggleMessageBarVisibility = false;
  }

  ngOnInit() {
    // Get # of unread messages
    this.subscriptions.push(this.messageService.getUnreadMessages()
      .subscribe(messages => {
        this.notificationCount = (messages.length === 0? '' : messages.length.toString());
      }
    ));
  }

  ngOnDestroy() {
    // Unsubscribe to all subscriptions on component destroy
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
