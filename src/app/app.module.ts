import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaCoseDaFareComponent } from './lista-cose-da-fare/lista-cose-da-fare.component';
import { AggiungiTaskComponent } from './aggiungi-task/aggiungi-task.component';
import { ElementoListaComponent } from './elemento-lista/elemento-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCoseDaFareComponent,
    AggiungiTaskComponent,
    ElementoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
