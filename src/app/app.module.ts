import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThroughCliComponent } from './through-cli/through-cli.component';
import { ManuallyComponent } from './manually/manual';
import { BindingComponent } from './binding/binding.component';
import { ParentComponent } from './parent/parent';
import { ChildComponent } from './child/child';
import { SecondparentComponent } from './secondparent/secondparent.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { TemplateDataDrivenComponent } from './template-data-driven/template-data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ThroughCliComponent,
    ManuallyComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent,
    SecondparentComponent,
    SecondchildComponent,
    TemplateDataDrivenComponent,
    TemplateDrivenComponent,
    DataDrivenComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
