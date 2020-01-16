import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThroughCliComponent } from './through-cli/through-cli.component';
import { ManuallyComponent } from './manually/manual';
import { BindingComponent } from './binding/binding.component';
import { SecondparentComponent } from './secondparent/secondparent.component';
import { SecondchildComponent } from './secondchild/secondchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ThroughCliComponent,
    ManuallyComponent,
    BindingComponent,
    SecondparentComponent,
    SecondchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
