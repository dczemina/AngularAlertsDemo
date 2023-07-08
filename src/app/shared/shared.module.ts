import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Third Party Modules
// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
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
    CheckboxModule,
    InputSwitchModule,
    MenubarModule,
    SidebarModule
  ],
  providers: [],
  exports: [
    AccordionModule,
    CommonModule,
    BadgeModule,
    ButtonModule,
    CheckboxModule,
    InputSwitchModule,
    MenubarModule,
    SidebarModule
  ]
})
export class SharedModule {}
