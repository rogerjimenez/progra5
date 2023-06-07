import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReplaySubject } from 'rxjs';
import { Candidato } from 'src/app/interfaces/Candidato';
import { RegistradorCandidatosService } from '../../registrador-candidatos.service';
import { Partido } from 'src/app/interfaces/Partido';
import { Cargo } from 'src/app/interfaces/Cargo';
import { Comicio } from 'src/app/interfaces/Comicio';

@Component({
  selector: 'app-modal-candidatos',
  templateUrl: './modal-candidatos.component.html',
  styleUrls: ['./modal-candidatos.component.css']
})
export class ModalCandidatosComponent implements OnInit {

    public accion: string = ''
    public esActualizacion: boolean = false;
    public candidato!: Candidato;
    public candidatoForm: FormGroup;
    private campoModificadoSubject: ReplaySubject<Candidato> = new ReplaySubject();
    public campoModificado$ = this.campoModificadoSubject.asObservable();
    public partidos: Partido[] = [];
    public cargos: Cargo[] = [];
    public comicios: Comicio[] = [];

    constructor(private bsModalRef: BsModalRef, private fb: FormBuilder, private registradorCandidatosService: RegistradorCandidatosService) { 
        this.candidatoForm = new FormGroup({})
    }

    ngOnInit(): void {       
        this.ObtenerPartidos();
        this.ObtenerCargos();
        this.ObtenerComicios();
        this.candidatoForm = this.obtenerFormulario();
        this.accion = this.esActualizacion ? 'Editar' : 'Guardar'
    }

    ObtenerPartidos() {
        this.registradorCandidatosService.ObtenerPartidos().
        subscribe(data => {
          this.partidos = data;
          console.log(data);
          
        });
    }

    ObtenerCargos() {
        this.registradorCandidatosService.ObtenerCargos().
        subscribe(data => {
          this.cargos = data;
          console.log(data);
        });
    }

    ObtenerComicios() {
        this.registradorCandidatosService.ObtenerComicios().
        subscribe(data => {
          this.comicios = data;
        });
    }

    private obtenerFormulario(): FormGroup {
        if (!this.esActualizacion) {
            this.candidato = {
              idCandidato: null,
              idCargoPublico: null,
              idPartido: null,
              nombre: null,
              edad: null,
              idEleccion: null,
              codigo: null
            };
        }

        const group: FormGroup = this.fb.group({
            idCandidato: [ { value : this.candidato?.idCandidato, disabled: this.esActualizacion}, [Validators.required]],
            idCargoPublico: [ this.candidato?.idCargoPublico, [Validators.required]],
            idPartido: [ this.candidato?.idPartido, [Validators.required]],
            nombre: [ this.candidato?.nombre, [Validators.required]],
            edad: [ this.candidato?.edad, [Validators.required]],
            idEleccion: [ this.candidato?.idEleccion, [Validators.required]],
            codigo: [ this.candidato?.codigo, [Validators.required]],
        });

        return group;
    }

    public guardarCandidato(): void {
        this.candidato.idCandidato = Number(this.idCandidato?.value);
        this.candidato.idCargoPublico = Number(this.idCargoPublico?.value);
        this.candidato.idPartido = Number(this.idPartido?.value);
        this.candidato.nombre = this.nombre?.value;
        this.candidato.edad = Number(this.edad?.value);
        this.candidato.idEleccion = Number(this.idEleccion?.value);
        this.candidato.codigo = this.codigo?.value;

        console.log(this.candidato);
        
        
        if(this.esActualizacion) {
            this.registradorCandidatosService.editarCandidato(this.candidato).subscribe(data => {
                this.campoModificadoSubject.next(this.candidato);
            });
        } else {
            this.registradorCandidatosService.GuardarCandidato(this.candidato).subscribe(data => {
                this.campoModificadoSubject.next(this.candidato);
            });
        }
        this.cancelar();
    }


    public get idCandidato() { return this.candidatoForm.get('idCandidato'); }
    public get idCargoPublico() { return this.candidatoForm.get('idCargoPublico'); }
    public get idPartido() { return this.candidatoForm.get('idPartido'); }
    public get nombre() { return this.candidatoForm.get('nombre'); }
    public get edad() { return this.candidatoForm.get('edad'); }
    public get idEleccion() { return this.candidatoForm.get('idEleccion'); }
    public get codigo() { return this.candidatoForm.get('codigo'); }

    public cancelar(): void {
        this.bsModalRef.hide();
    }

}
