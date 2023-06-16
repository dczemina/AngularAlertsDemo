import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Official Modules
    BrowserModule,
    // Custom Modules
    CoreModule,
    SharedModule
    // Third Party Modules
    // None
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
