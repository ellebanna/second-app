import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThroughCliComponent } from './through-cli/through-cli.component';
import { ManuallyComponent } from './manually/manual';
import { BindingComponent } from './binding/binding.component';
import { ParentComponent } from './parent/parent';

@NgModule({
  declarations: [
    AppComponent,
    ThroughCliComponent,
    ManuallyComponent,
    BindingComponent,
    ParentComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
