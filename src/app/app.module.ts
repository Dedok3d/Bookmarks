import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterialModule } from './lib/import/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './lib/ui/home/home.component';
import { NavComponent } from './lib/ui/nav/nav.component';
import { ContainerComponent } from './lib/ui/container/container.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainComponent } from './lib/ui/main/main.component';
import { ListComponent } from './lib/ui/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContainerComponent,
    MainComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
