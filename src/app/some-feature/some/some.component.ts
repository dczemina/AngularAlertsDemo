import { Component } from '@angular/core';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent {

  constructor (private messageService: MessageService) {}

}
