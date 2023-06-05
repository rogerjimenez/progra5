import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AbcPartidosComponent } from './abc-partidos/abc-partidos.component';
import { LayoutModule } from '../layout/layout.module';
import { AbcComiciosComponent } from './abc-comicios/abc-comicios.component';
import { ModalPartidosComponent } from './abc-partidos/modal-partidos/modal-partidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministradorServiciosService } from './administrador-servicios.service';
import { AbcCargosComponent } from './abc-cargos/abc-cargos.component';
import { ModalCargosComponent } from './abc-cargos/modal-cargos/modal-cargos.component';
import { ModalComiciosComponent } from './abc-comicios/modal-comicios/modal-comicios.component';


@NgModule({
  declarations: [
    AbcPartidosComponent,
    AbcComiciosComponent,
    ModalPartidosComponent,
    AbcCargosComponent,
    ModalCargosComponent,
    ModalComiciosComponent
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
    ModalPartidosComponent,
    ModalCargosComponent,
    ModalComiciosComponent
  ]
})
export class AdministradorModule { }
