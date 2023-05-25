import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MarcoAppComponent } from './marco-app/marco-app.component';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    MarcoAppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    MarcoAppComponent, HomeComponent
  ]
})
export class LayoutModule { }
