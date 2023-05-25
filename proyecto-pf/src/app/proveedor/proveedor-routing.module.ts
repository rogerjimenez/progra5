import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';
import { SancionesComponent } from './sanciones/sanciones.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sanciones',
        component: SancionesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }