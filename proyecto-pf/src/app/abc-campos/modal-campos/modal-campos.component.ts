import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReplaySubject } from 'rxjs';
import { Campo } from 'src/app/interfaces/Campo';

@Component({
    selector: 'app-modal-campos',
    templateUrl: './modal-campos.component.html',
    styleUrls: ['./modal-campos.component.css']
})
export class ModalCamposComponent implements OnInit {
    public accion: string = ''
    public esActualizacion: boolean = false;
    public campo!: Campo;
    public campoForm: FormGroup;
    private campoModificadoSubject: ReplaySubject<Campo> = new ReplaySubject();
    public campoModificado$ = this.campoModificadoSubject.asObservable();

    constructor(private bsModalRef: BsModalRef, private fb: FormBuilder,) { 
        this.campoForm = new FormGroup({})
    }

    ngOnInit(): void {       
        this.campoForm = this.obtenerFormulario();
        this.accion = this.esActualizacion ? 'Editar' : 'Guardar'
    }

    private obtenerFormulario(): FormGroup {
        if (!this.esActualizacion) {
            this.campo = {
                idCampo: null,
                nombre: null
            };
        }

        const group: FormGroup = this.fb.group({
			idCampo: [ { value : this.campo?.idCampo, disabled: this.esActualizacion}, [Validators.required]],
            nombre: [ this.campo?.nombre, [Validators.required]]
        });

        return group;
    }

    public guardarCampo(): void {
        this.campo.idCampo = Number(this.idCampo?.value);
        this.campo.nombre = this.nombre?.value;
        this.campoModificadoSubject.next(this.campo);
        this.cancelar();

    }

    public get idCampo() { return this.campoForm.get('idCampo'); }
    public get nombre() { return this.campoForm.get('nombre'); }

    public cancelar(): void {
        this.bsModalRef.hide();
    }

}
