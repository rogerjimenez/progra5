import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistradorRoutingModule } from './registrador-routing.module';
import { AbcResultadosComponent } from './abc-resultados/abc-resultados.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    AbcResultadosComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RegistradorRoutingModule
  ]
})
export class RegistradorModule { }
