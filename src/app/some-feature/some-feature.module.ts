import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SomeComponent } from './some/some.component';



@NgModule({
  declarations: [
    SomeComponent
  ],
  imports: [
    // Official Modules
    CommonModule,
    // Custom Modules
    SharedModule
  ],
  exports: [
    SomeComponent
  ]
})
export class SomeFeatureModule { }
