import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Third Party Modules
// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [],
  imports: [
    // Official Modules
    CommonModule,
    // Third Party Modules
    AccordionModule,
    BadgeModule,
    ButtonModule,
    MenubarModule,
    SidebarModule
  ],
  providers: [],
  exports: [
    AccordionModule,
    CommonModule,
    BadgeModule,
    ButtonModule,
    MenubarModule,
    SidebarModule
  ]
})
export class SharedModule {}
