import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Candidato } from '../interfaces/Candidato';
import { Partido } from '../interfaces/Partido';
import { Cargo } from '../interfaces/Cargo';
import { Comicio } from '../interfaces/Comicio';

@Injectable({
  providedIn: 'root'
})
export class RegistradorCandidatosService {

  constructor(private http: HttpClient) { }

    public ObtenerCandidatos(): Observable<Candidato[]>{
      const url = `/api/Candidatos/ObtenerCandidatos`;
      return this.http.get<Candidato[]>(url);
    }
    
    public GuardarCandidato(candidato: Candidato): Observable<boolean>{
      console.log(candidato);
      const url = `/api/Candidatos/GuardarCandidato`;
      return this.http.post<boolean>(url, candidato);
    }

    public editarCandidato(candidato: Candidato): Observable<boolean>{
      const url = `/api/Candidatos/ActualizarCandidato`;
      return this.http.put<boolean>(url, candidato);
    }

    public eliminarCandidato(candidato: Candidato): Observable<boolean>{
      const url = `/api/Candidatos/EliminarCandidato/`+ candidato.idCandidato;
      //const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), body: partido };
      return this.http.delete<boolean>(url);
    }

    public ObtenerPartidos(): Observable<Partido[]>{
      const url = `/api/PartidosPoliticos/ObtenerPartidos`;
      return this.http.get<Partido[]>(url);
    }

    public ObtenerCargos(): Observable<Cargo[]>{
      const url = `/api/CargoPublico/ObtenerCargosPublicos`;
      return this.http.get<Cargo[]>(url);
    }

    public ObtenerComicios(): Observable<Comicio[]>{
      const url = `/api/Elecciones/ObtenerElecciones`;
      return this.http.get<Comicio[]>(url);
    }
}
