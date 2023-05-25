import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opcion } from '../../interfaces/Usuario';
import { LoginService } from '../../servicios/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public menu: Opcion[] = [];
    constructor(public config: LoginService, private router: Router) { }

    ngOnInit(): void {
        this.obtenerMenu();
    }

    public obtenerMenu() {
       let usuarioLogueado = this.config.obtenerUsuarioLogueado();
       if (usuarioLogueado) {
            this.menu = usuarioLogueado!.menu;
       } else {
        this.router.navigate(['/login']);   
       }
    }

    obtenerEstilo(opcion: Opcion) {
        return this.contieneOpciones(opcion) ? 'dropdown-submenu' : '';
      }
    
      obtenerTrigger(opcion: Opcion) {
        return this.contieneOpciones(opcion) ? 'mouseover' : '';
      }
    
      contieneOpciones(opcion: Opcion) {
        return opcion.opciones.length > 0;
      }
}
