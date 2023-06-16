import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Official Modules
    BrowserModule,
    // Custom Modules
    CoreModule
    // Third Party Modules
    // None
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
