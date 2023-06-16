import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModalComponent } from './info-modal/info-modal.component';


@NgModule({
  declarations: [
    InfoModalComponent
  ],
  imports: [
    // Official Modules
    CommonModule,
    // Third Party Modules
  ],
  exports: [
    CommonModule,
    InfoModalComponent
  ]
})
export class SharedModule {}
