import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './service/message.service';
import { NavComponent } from './nav/nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesPanelComponent } from './messages-panel/messages-panel.component';



@NgModule({
  declarations: [
    MessagesPanelComponent,
    NavComponent
  ],
  imports: [
    // Official Modules
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    // Custom Modules
    SharedModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    MessagesPanelComponent,
    NavComponent
  ]
})
export class CoreModule { }
