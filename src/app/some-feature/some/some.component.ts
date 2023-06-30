import { Component } from '@angular/core';
import { MessageTypeEnum } from 'src/app/core/model/message-type.enum';
import { MessageModel } from 'src/app/core/model/message.model';
import { MessageService } from 'src/app/core/service/message.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent {

  constructor (private messageService: MessageService) {}

  public generateSuccessMessage(): void {
    this.messageService.addMessage(new MessageModel(new Date(), "Auto-generated Success Message", "Auto-generated Success Message Body", MessageTypeEnum.success))
  }
  public generateInfoMessage(): void {
    this.messageService.addMessage(new MessageModel(new Date(), "Auto-generated Info Message", "Auto-generated Info Message Body", MessageTypeEnum.info))
  }
  public generateWarningMessage(): void {
    this.messageService.addMessage(new MessageModel(new Date(), "Auto-generated Warning Message", "Auto-generated Warning Message Body", MessageTypeEnum.warning))
  }
  public generateErrorMessage(): void {
    this.messageService.addMessage(new MessageModel(new Date(), "Auto-generated Error Message", "Auto-generated Error Message Body", MessageTypeEnum.error))
  }

}
