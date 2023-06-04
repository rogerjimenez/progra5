import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AbcPartidosComponent } from './abc-partidos/abc-partidos.component';
import { LayoutModule } from '../layout/layout.module';
import { AbcComiciosComponent } from './abc-comicios/abc-comicios.component';
import { ModalPartidosComponent } from './abc-partidos/modal-partidos/modal-partidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministradorServiciosService } from './administrador-servicios.service';


@NgModule({
  declarations: [
    AbcPartidosComponent,
    AbcComiciosComponent,
    ModalPartidosComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdministradorRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AdministradorServiciosService
  ],
  entryComponents: [
    ModalPartidosComponent
  ]
})
export class AdministradorModule { }
