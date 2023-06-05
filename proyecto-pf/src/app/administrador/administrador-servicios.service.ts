import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Partido } from '../interfaces/Partido';
import { Cargo } from '../interfaces/Cargo';
import { Comicio } from '../interfaces/Comicio';

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

    //Comicios
    public ObtenerComicios(): Observable<Comicio[]>{
      const url = `/api/Elecciones/ObtenerElecciones`;
      return this.http.get<Comicio[]>(url);
    }
    
    public GuardarComicio(comicio: Comicio): Observable<boolean>{
      console.log(comicio);
      const url = `/api/Elecciones/GuardarEleccion`;
      return this.http.post<boolean>(url, comicio);
    }

    public editarComicio(comicio: Comicio): Observable<boolean>{
      const url = `/api/Elecciones/ActualizarEleccion`;
      return this.http.put<boolean>(url, comicio);
    }

    public eliminarComicio(comicio: Comicio): Observable<boolean>{
      const url = `/api/Elecciones/EliminarEleccion/`+ comicio.idEleccion;
      //const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), body: partido };
      return this.http.delete<boolean>(url);
    }

    //Cargos
    public ObtenerCargos(): Observable<Cargo[]>{
      const url = `/api/CargoPublico/ObtenerCargosPublicos`;
      return this.http.get<Cargo[]>(url);
    }
    
    public GuardarCargo(cargo: Cargo): Observable<boolean>{
      console.log(cargo);
      const url = `/api/CargoPublico/GuardarCargoPublico`;
      return this.http.post<boolean>(url, cargo);
    }

    public editarCargo(cargo: Cargo): Observable<boolean>{
      const url = `/api/CargoPublico/ActualizarCargoPublico`;
      return this.http.put<boolean>(url, cargo);
    }

    public eliminarCargo(cargo: Cargo): Observable<boolean>{
      const url = `/api/CargoPublico/EliminarCargoPublico/`+ cargo.idCargo;
      //const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), body: partido };
      return this.http.delete<boolean>(url);
    }
}
