import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCoseDaFareComponent } from './lista-cose-da-fare/lista-cose-da-fare.component';
import { ListaComponent } from './lista/lista.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';

const routes: Routes = [
  { path: '', component: ListaCoseDaFareComponent },
  { path: 'pagina-non-trovata', component: PaginaNonTrovataComponent },
  { path: ':tipoLista', component: ListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pagina-non-trovata' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
