import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AbcPartidosComponent } from './abc-partidos/abc-partidos.component';
import { LayoutModule } from '../layout/layout.module';
import { AbcComiciosComponent } from './abc-comicios/abc-comicios.component';


@NgModule({
  declarations: [
    AbcPartidosComponent,
    AbcComiciosComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
