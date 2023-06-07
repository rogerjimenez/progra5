import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcCandidatosComponent } from './abc-candidatos/abc-candidatos.component';
import { ModalCandidatosComponent } from './abc-candidatos/modal-candidatos/modal-candidatos.component';
import { RegistradorCandidatosService } from './registrador-candidatos.service';
import { RegistradorCandidatosRoutingModule } from './registrador-candidatos-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AbcCandidatosComponent,
    ModalCandidatosComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RegistradorCandidatosRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistradorCandidatosService
  ],
})
export class RegistradorCandidatosModule { }
