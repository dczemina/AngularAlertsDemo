import { MessageTypeEnum } from "./message-type.enum";

export class MessageModel {
    constructor(
      private date: Date,
      private subject: string,
      private body: string,
      private type: MessageTypeEnum,
      private open: boolean = false,
      private read: boolean = false
    ) {}
  
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
  }