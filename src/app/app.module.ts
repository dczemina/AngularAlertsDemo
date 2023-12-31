import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SomeFeatureModule } from './some-feature/some-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Official Modules
    BrowserModule,
    // Custom Modules
    CoreModule,
    SomeFeatureModule
    // Third Party Modules
    // None
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
