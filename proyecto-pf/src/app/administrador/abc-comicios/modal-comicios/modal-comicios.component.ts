import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { Comicio } from 'src/app/interfaces/Comicio';
import { AdministradorServiciosService } from '../../administrador-servicios.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-comicios',
  templateUrl: './modal-comicios.component.html',
  styleUrls: ['./modal-comicios.component.css']
})
export class ModalComiciosComponent implements OnInit {

    public accion: string = ''
    public esActualizacion: boolean = false;
    public comicio!: Comicio;
    public comicioForm: FormGroup;
    private campoModificadoSubject: ReplaySubject<Comicio> = new ReplaySubject();
    public campoModificado$ = this.campoModificadoSubject.asObservable();

    constructor(private bsModalRef: BsModalRef, private fb: FormBuilder, private adminServicios: AdministradorServiciosService) { 
        this.comicioForm = new FormGroup({})
    }

    ngOnInit(): void {       
        this.comicioForm = this.obtenerFormulario();
        this.accion = this.esActualizacion ? 'Editar' : 'Guardar'
    }

    private obtenerFormulario(): FormGroup {
        if (!this.esActualizacion) {
            this.comicio = {
                idEleccion: null,
                ejercicio: null,
                fechaInicio: null,
                fechaFin: null,
                codigo: null,
                estado: null
            };
        }

        const group: FormGroup = this.fb.group({
          idEleccion: [ { value : this.comicio?.idEleccion, disabled: this.esActualizacion}, [Validators.required]],
          ejercicio: [ this.comicio?.ejercicio, [Validators.required]],
          fechaInicio: [ this.comicio?.fechaInicio, [Validators.required]],
          fechaFin: [ this.comicio?.fechaFin, [Validators.required]],
          codigo: [ this.comicio?.codigo, [Validators.required]],
          estado: [ this.comicio?.estado, [Validators.required]]
        });

        return group;
    }

    public guardarComicio(): void {
        this.comicio.idEleccion = Number(this.idEleccion?.value);
        this.comicio.ejercicio = this.ejercicio?.value;
        this.comicio.fechaInicio = this.fechaInicio?.value;
        this.comicio.fechaFin = this.fechaFin?.value;
        this.comicio.codigo = this.codigo?.value;
        this.comicio.estado = this.estado?.value;
        
        if(this.esActualizacion) {
            this.adminServicios.editarComicio(this.comicio).subscribe(data => {
                this.campoModificadoSubject.next(this.comicio);
            });
        } else {
            this.adminServicios.GuardarComicio(this.comicio).subscribe(data => {
                this.campoModificadoSubject.next(this.comicio);
            });
        }
        
        this.cancelar();

    }


    public get idEleccion() { return this.comicioForm.get('idEleccion'); }
    public get ejercicio() { return this.comicioForm.get('ejercicio'); }
    public get fechaInicio() { return this.comicioForm.get('fechaInicio'); }
    public get fechaFin() { return this.comicioForm.get('fechaFin'); }
    public get codigo() { return this.comicioForm.get('codigo'); }
    public get estado() { return this.comicioForm.get('estado'); }

    public cancelar(): void {
        this.bsModalRef.hide();
    }

}
