import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Partido } from '../interfaces/Partido';

@Injectable({
  providedIn: 'root'
})
export class AdministradorServiciosService {

  constructor(private http: HttpClient) { }

    public ObtenerPartidos(): Observable<Partido[]>{
      const url = `/api/PartidosPoliticos/ObtenerPartidos`;
      return this.http.get<Partido[]>(url);
    }
    
    public GuardarPartido(partido: Partido): Observable<boolean>{
      console.log(partido);
      const url = `/api/PartidosPoliticos/GuardarPartidoPolitico`;
      return this.http.post<boolean>(url, partido);
    }

    public editarPartido(partido: Partido): Observable<boolean>{
      const url = `/api/PartidosPoliticos/ActualizarPartidoPolitico`;
      return this.http.put<boolean>(url, partido);
    }

    public eliminarPartido(partido: Partido): Observable<boolean>{
      const url = `/api/PartidosPoliticos/EliminarPartidoPolitico/`+ partido.idPartido;
      //const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), body: partido };
      return this.http.delete<boolean>(url);
    }
}
