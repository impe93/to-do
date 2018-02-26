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
import { AuthGuardService } from './auth-guard.service';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrazioneFormComponent } from './registrazione-form/registrazione-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCoseDaFareComponent,
    AggiungiTaskComponent,
    ElementoListaComponent,
    ListaComponent,
    AttivitaComponent,
    PaginaNonTrovataComponent,
    LoginComponent,
    LoginFormComponent,
    RegistrazioneFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TaskService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
