import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThroughCliComponent } from './through-cli/through-cli.component';
import { ManuallyComponent } from './manually/manual';

@NgModule({
  declarations: [
    AppComponent,
    ThroughCliComponent,
    ManuallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
