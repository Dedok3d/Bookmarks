import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { MaterialModule } from './lib/import/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './lib/ui/home/home.component';
import { NavComponent } from './lib/ui/nav/nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainComponent } from './lib/ui/main/main.component';
import { ListComponent } from './lib/ui/list/list.component';

import { DialogOverviewExampleDialog } from './lib/ui/list/list.component';
import { EditComponent } from './lib/ui/edit/edit.component';
import { AddComponent } from './lib/ui/add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    ListComponent,
    DialogOverviewExampleDialog,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ListComponent,
    DialogOverviewExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
