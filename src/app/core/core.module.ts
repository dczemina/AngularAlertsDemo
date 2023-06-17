import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './service/message.service';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    // Official Modules
    CommonModule,
    FormsModule,
    // Custom Modules
    SharedModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
