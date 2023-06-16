export class MessageModel {
    constructor(
      private date: Date,
      private message: string,
      private type: string,
      private open: boolean = false,
      private read: boolean = false
    ) {}
  
    public getDate(): Date {
      return this.date;
    }
  
    public setDate(date: Date): void {
      this.date = date;
    }
  
    public getMessage(): string {
      return this.message;
    }
  
    public setMessage(message: string): void {
      this.message = message;
    }
  
    public getType(): string {
      return this.type;
    }
  
    public setType(type: string): void {
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