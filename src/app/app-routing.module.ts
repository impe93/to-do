import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCoseDaFareComponent } from './lista-cose-da-fare/lista-cose-da-fare.component';

const routes: Routes = [
  { path: '', component: ListaCoseDaFareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
