import { MessageTypeEnum } from "./message-type.enum";

export class MessageModel {
    private uid: any;

    constructor(
      private date: Date,
      private subject: string,
      private body: string,
      private type: MessageTypeEnum,
      private open: boolean = false,
      private read: boolean = false
    ) {
      this.uid = crypto.randomUUID();
    }

    public getUid(): any {
      return this.uid;
    }
  
    public getDate(): Date {
      return this.date;
    }
  
    public setDate(date: Date): void {
      this.date = date;
    }
  
    public getSubject(): string {
      return this.subject;
    }
  
    public setSubject(subject: string): void {
      this.subject = subject;
    }
  
    public getBody(): string {
      return this.body;
    }
  
    public setBody(body: string): void {
      this.body = body;
    }
  
    public getType(): MessageTypeEnum {
      return this.type;
    }
  
    public setType(type: MessageTypeEnum): void {
      this.type = type;
    }
  
    public getOpen(): boolean {
      return this.open;
    }
  
    public setOpen(open: boolean): void {
      this.open = open;
    }
  
    public getRead(): boolean {
      return this.read;
    }
  
    public setRead(read: boolean): void {
      this.read = read;
    }

    /* Check if all properties are equal */
    public equals(message: MessageModel): boolean {
        if (this.getDate() !== message.getDate())
            return false;
        if (this.getSubject() !== message.getSubject())
            return false;
        if (this.getBody() !== message.getBody())
            return false;
        if (this.getType() !== message.getType())
            return false;
        if (this.getOpen() !== message.getOpen())
            return false;
        if (this.getRead() !== message.getRead())
            return false;

        return true;
    }
  }
  