import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaCoseDaFareComponent } from './lista-cose-da-fare/lista-cose-da-fare.component';
import { AggiungiTaskComponent } from './aggiungi-task/aggiungi-task.component';
import { ElementoListaComponent } from './elemento-lista/elemento-lista.component';
import { ListaComponent } from './lista/lista.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { TaskService } from './task.service';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCoseDaFareComponent,
    AggiungiTaskComponent,
    ElementoListaComponent,
    ListaComponent,
    AttivitaComponent,
    PaginaNonTrovataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
