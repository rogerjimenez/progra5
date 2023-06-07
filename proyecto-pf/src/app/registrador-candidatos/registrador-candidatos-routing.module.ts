import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';
import { AbcCandidatosComponent } from './abc-candidatos/abc-candidatos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'candidatos',
    component: AbcCandidatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistradorCandidatosRoutingModule { }
