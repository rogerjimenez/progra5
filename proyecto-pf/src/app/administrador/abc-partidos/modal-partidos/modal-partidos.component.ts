import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Partido } from 'src/app/interfaces/Partido';
import { AdministradorServiciosService } from '../../administrador-servicios.service';

@Component({
  selector: 'app-modal-partidos',
  templateUrl: './modal-partidos.component.html',
  styleUrls: ['./modal-partidos.component.css']
})
export class ModalPartidosComponent implements OnInit {

  public accion: string = ''
    public esActualizacion: boolean = false;
    public partido!: Partido;
    public partidoForm: FormGroup;
    private campoModificadoSubject: ReplaySubject<Partido> = new ReplaySubject();
    public campoModificado$ = this.campoModificadoSubject.asObservable();

    constructor(private bsModalRef: BsModalRef, private fb: FormBuilder, private adminServicios: AdministradorServiciosService) { 
        this.partidoForm = new FormGroup({})
    }

    ngOnInit(): void {       
        this.partidoForm = this.obtenerFormulario();
        this.accion = this.esActualizacion ? 'Editar' : 'Guardar'
    }

    private obtenerFormulario(): FormGroup {
        if (!this.esActualizacion) {
            this.partido = {
                idPartido: null,
                nombre: null,
                acronimo:null,
                eslogan: null,
                representanteLegal: null,
                secretarioGeneral: null,
                fechaConstitucion: null
            };
        }

        const group: FormGroup = this.fb.group({
			idPartido: [ { value : this.partido?.idPartido, disabled: this.esActualizacion}, [Validators.required]],
            nombre: [ this.partido?.nombre, [Validators.required]],
            acronimo: [ this.partido?.acronimo, [Validators.required]],
            eslogan: [ this.partido?.eslogan, [Validators.required]],
            representanteLegal: [ this.partido?.representanteLegal, [Validators.required]],
            secretarioGeneral: [ this.partido?.secretarioGeneral, [Validators.required]],
            fechaConstitucion: [ this.partido?.fechaConstitucion, [Validators.required]]
        });

        return group;
    }

    public guardarPartido(): void {
        this.partido.idPartido = Number(this.idPartido?.value);
        this.partido.nombre = this.nombre?.value;
        this.partido.acronimo = this.acronimo?.value;
        this.partido.eslogan = this.eslogan?.value;
        this.partido.representanteLegal = this.representanteLegal?.value;
        this.partido.secretarioGeneral = this.secretarioGeneral?.value;
        this.partido.fechaConstitucion = this.fechaConstitucion?.value;
        
        if(this.esActualizacion) {
            this.adminServicios.editarPartido(this.partido).subscribe(data => {
                this.campoModificadoSubject.next(this.partido);
            });
        } else {
            this.adminServicios.GuardarPartido(this.partido).subscribe(data => {
                this.campoModificadoSubject.next(this.partido);
            });
        }
        
        this.cancelar();

    }


    public get idPartido() { return this.partidoForm.get('idPartido'); }
    public get nombre() { return this.partidoForm.get('nombre'); }
    public get acronimo() { return this.partidoForm.get('acronimo'); }
    public get eslogan() { return this.partidoForm.get('eslogan'); }
    public get representanteLegal() { return this.partidoForm.get('representanteLegal'); }
    public get secretarioGeneral() { return this.partidoForm.get('secretarioGeneral'); }
    public get fechaConstitucion() { return this.partidoForm.get('fechaConstitucion'); }

    public cancelar(): void {
        this.bsModalRef.hide();
    }

}
