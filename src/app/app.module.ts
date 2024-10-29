import { MenupaisesycontienetesComponent } from './menupaisesycontienetes/menupaisesycontienetes.component';
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MundocompletoComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponet,
    MundocompletoComponent
  ],
  imports:[
    BrowserModule,
    HttpClient
  ],
  providers[],
  bootstrap: [AppComponent]
})
export class import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenupaisesycontienetesComponent } from './MenupaisesycontienetesComponent/MenupaisesycontienetesComponent.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ MenupaisesycontienetesComponent ],
  bootstrap:    [ MenupaisesycontienetesComponent ]
})
export class AppModule { }
