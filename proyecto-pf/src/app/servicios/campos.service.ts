import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campo } from '../interfaces/Campo';

@Injectable({
    providedIn: 'root'
})
export class CamposService {

    constructor(private http: HttpClient) { }

    public ObtenerCampos(): Observable<Campo[]>{
        const url = `api/CampoAdministracion/ObtenerCampos`;
        return this.http.get<Campo[]>(url);
    }

    public editarCampo(campo: Campo): Observable<boolean>{
        const url = `api/CampoAdministracion/EliminarCampo`;
        return this.http.put<boolean>(url, campo);
    }

    public eliminarCampo(campo: Campo): Observable<boolean>{
        const url = `api/CampoAdministracion/EliminarCampo`;
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), body: campo };
        return this.http.delete<boolean>(url, options);
    }
}
