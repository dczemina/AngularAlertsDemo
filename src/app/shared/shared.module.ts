import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModalComponent } from './info-modal/info-modal.component';
// Third Party Modules
// PrimeNG Modules
import { BadgeModule } from 'primeng/badge';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    InfoModalComponent
  ],
  imports: [
    // Official Modules
    CommonModule,
    // Third Party Modules
    BadgeModule,
    ConfirmDialogModule,
    MenubarModule
  ],
  exports: [
    CommonModule,
    InfoModalComponent,
    BadgeModule,
    ConfirmDialogModule,
    MenubarModule
  ]
})
export class SharedModule {}
