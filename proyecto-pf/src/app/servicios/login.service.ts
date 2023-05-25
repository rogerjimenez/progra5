import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, Observable, of, tap } from 'rxjs';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private usuarioLogueado: Usuario | undefined;
    
    constructor(private http: HttpClient, private router: Router) { }
    
    public verificarUsuario(credenciales: LoginUsuario): Observable<Usuario> {
        //Aca iria el consumo del servicio
        //Este deberia devolver un objeto como el que se retorna en el ejemplo
        return this.http.post<Usuario>('api/Usuario/VarificarUsuario', credenciales)
            .pipe(
                concatMap(usuario => {
                    this.usuarioLogueado = usuario;
                    return of(usuario);
                })
            );        
    }

    public obtenerUsuarioLogueado(): Usuario | undefined {
        if (!this.usuarioLogueado) {
            this.router.navigate(['/login']);
        }
        return this.usuarioLogueado;
    }

    public salirDelSistema(): void {
        this.router.navigate(['/login']);
    }
}
