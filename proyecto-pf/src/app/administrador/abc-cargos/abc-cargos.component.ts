import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Cargo } from 'src/app/interfaces/Cargo';
import { AdministradorServiciosService } from '../administrador-servicios.service';
import { ModalCargosComponent } from './modal-cargos/modal-cargos.component';

@Component({
  selector: 'app-abc-cargos',
  templateUrl: './abc-cargos.component.html',
  styleUrls: ['./abc-cargos.component.css']
})
export class AbcCargosComponent implements OnInit {

    modalRef?: BsModalRef;
    public accion: string = 'Agregar'
    public cargoForm: FormGroup;
    public cargos: Cargo[] = [];
    constructor(
        private modalService: BsModalService,
        private administradorService: AdministradorServiciosService
    ) {
        this.cargoForm = new FormGroup({});
    }

    ngOnInit(): void {
        this.administradorService.ObtenerCargos()
            .subscribe(data => {
                this.cargos = data.splice(0, 10);
            });
    }

    public editarCargo(cargo?: Cargo): void {
        const initialState: ModalOptions = {
            initialState: {
                esActualizacion: cargo ? true : false,
                cargo
            }
        };
        this.modalRef = this.modalService.show(ModalCargosComponent, initialState);
        this.modalRef.content.campoModificado$
            .subscribe((data:Cargo) => {
                if (cargo) {
                    let partidoEditado = this.cargos.find(item => item.idCargo = cargo.idCargo);
                    partidoEditado = data;
                } else {
                    this.cargos.push(data);
                }
            })
    }

    public eliminarCargo(cargo: Cargo): void {
        this.administradorService.eliminarCargo(cargo).subscribe(data => {
            this.cargos.splice(this.cargos.indexOf(cargo), 1);
        });
        
    }

}
