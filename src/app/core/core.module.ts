import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './service/message.service';



@NgModule({
  declarations: [],
  imports: [
    // Official Modules
    CommonModule,
    FormsModule,
  ],
  providers: [
    MessageService
  ]
})
export class CoreModule { }
