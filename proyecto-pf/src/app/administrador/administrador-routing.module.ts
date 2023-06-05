import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcPartidosComponent } from './abc-partidos/abc-partidos.component';
import { HomeComponent } from '../layout/home/home.component';
import { AbcComiciosComponent } from './abc-comicios/abc-comicios.component';
import { AbcCargosComponent } from './abc-cargos/abc-cargos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cargos',
    component: AbcCargosComponent
  },
  {
    path: 'partidos',
    component: AbcPartidosComponent
  },
  {
    path: 'comicios',
    component: AbcComiciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
