import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutenticacionRoutingModule
  ]
})
export class AutenticacionModule { }
