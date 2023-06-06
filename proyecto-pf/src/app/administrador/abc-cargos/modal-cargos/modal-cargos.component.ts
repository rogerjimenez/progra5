import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdministradorServiciosService } from '../../administrador-servicios.service';
import { Cargo } from 'src/app/interfaces/Cargo';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-modal-cargos',
  templateUrl: './modal-cargos.component.html',
  styleUrls: ['./modal-cargos.component.css']
})
export class ModalCargosComponent implements OnInit {

    public accion: string = ''
    public esActualizacion: boolean = false;
    public cargo!: Cargo;
    public cargoForm: FormGroup;
    private campoModificadoSubject: ReplaySubject<Cargo> = new ReplaySubject();
    public campoModificado$ = this.campoModificadoSubject.asObservable();

    constructor(private bsModalRef: BsModalRef, private fb: FormBuilder, private adminServicios: AdministradorServiciosService) { 
        this.cargoForm = new FormGroup({})
    }

    ngOnInit(): void {       
        this.cargoForm = this.obtenerFormulario();
        this.accion = this.esActualizacion ? 'Editar' : 'Guardar'
    }

    private obtenerFormulario(): FormGroup {
        if (!this.esActualizacion) {
            this.cargo = {
                idCargo: null,
                nombre: null
            };
        }

        const group: FormGroup = this.fb.group({
			      idCargo: [ { value : this.cargo?.idCargo, disabled: this.esActualizacion}, [Validators.required]],
            nombre: [ this.cargo?.nombre, [Validators.required]]
        });

        return group;
    }

    public guardarCargo(): void {
        this.cargo.idCargo = Number(this.idCargo?.value);
        this.cargo.nombre = this.nombre?.value;
        
        if(this.esActualizacion) {
            this.adminServicios.editarCargo(this.cargo).subscribe(data => {
                this.campoModificadoSubject.next(this.cargo);
            });
        } else {
            this.adminServicios.GuardarCargo(this.cargo).subscribe(data => {
                this.campoModificadoSubject.next(this.cargo);
            });
        }
        this.cancelar();
    }


    public get idCargo() { return this.cargoForm.get('idCargo'); }
    public get nombre() { return this.cargoForm.get('nombre'); }

    public cancelar(): void {
        this.bsModalRef.hide();
    }

}
