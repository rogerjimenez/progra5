import { NgModule } from '@angular/core';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { SancionesComponent } from './sanciones/sanciones.component';



@NgModule({
  declarations: [
    SancionesComponent
  ],
  imports: [
    LayoutModule,
    ProveedorRoutingModule,
  ]
})
export class ProveedorModule { }
