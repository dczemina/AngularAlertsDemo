import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPanelComponent } from './messages-panel.component';

describe('MessagesPanelComponent', () => {
  let component: MessagesPanelComponent;
  let fixture: ComponentFixture<MessagesPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesPanelComponent]
    });
    fixture = TestBed.createComponent(MessagesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
