import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Campo } from '../interfaces/Campo';
import { CamposService } from '../servicios/campos.service';
import { ModalCamposComponent } from './modal-campos/modal-campos.component';

@Component({
    selector: 'app-abc-campos',
    templateUrl: './abc-campos.component.html',
    styleUrls: ['./abc-campos.component.css']
})
export class AbcCamposComponent implements OnInit {
    modalRef?: BsModalRef;
    public accion: string = 'Agregar'
    public campoForm: FormGroup;
    public campos: Campo[] = [];
    constructor(
        private modalService: BsModalService,
        private camposService: CamposService
    ) {
        this.campoForm = new FormGroup({});
    }

    ngOnInit(): void {
        this.camposService.ObtenerCampos()
            .subscribe(data => {
                this.campos = data.splice(0, 10);
            });
    }

    public editarCampo(campo?: Campo): void {
        const initialState: ModalOptions = {
            initialState: {
                esActualizacion: campo ? true : false,
                campo
            }
        };
        this.modalRef = this.modalService.show(ModalCamposComponent, initialState);
        this.modalRef.content.campoModificado$
            .subscribe((data:Campo) => {
                if (campo) {
                    let campoEditado = this.campos.find(item => item.idCampo = campo.idCampo);
                    campoEditado = data;
                } else {
                    this.campos.push(data);
                }
            })
    }

    public eliminarCampo(campo: Campo): void {
        this.campos.splice(this.campos.indexOf(campo), 1);
    }
}
