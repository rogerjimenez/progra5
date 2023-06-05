import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Comicio } from 'src/app/interfaces/Comicio';
import { AdministradorServiciosService } from '../administrador-servicios.service';
import { ModalComiciosComponent } from './modal-comicios/modal-comicios.component';

@Component({
  selector: 'app-abc-comicios',
  templateUrl: './abc-comicios.component.html',
  styleUrls: ['./abc-comicios.component.css']
})
export class AbcComiciosComponent implements OnInit {

  modalRef?: BsModalRef;
    public accion: string = 'Agregar'
    public campoForm: FormGroup;
    public comicios: Comicio[] = [];
    constructor(
        private modalService: BsModalService,
        private administradorService: AdministradorServiciosService
    ) {
        this.campoForm = new FormGroup({});
    }

    ngOnInit(): void {
        this.administradorService.ObtenerComicios()
            .subscribe(data => {
                this.comicios = data.splice(0, 10);
            });
    }

    public editarComicio(comicio?: Comicio): void {
        const initialState: ModalOptions = {
            initialState: {
                esActualizacion: comicio ? true : false,
                comicio
            }
        };
        this.modalRef = this.modalService.show(ModalComiciosComponent, initialState);
        this.modalRef.content.campoModificado$
            .subscribe((data:Comicio) => {
                if (comicio) {
                    let comicioEditado = this.comicios.find(item => item.idEleccion = comicio.idEleccion);
                    comicioEditado = data;
                } else {
                    this.comicios.push(data);
                }
            })
    }

    public eliminarComicio(comicio: Comicio): void {
        this.administradorService.eliminarComicio(comicio).subscribe(data => {
            this.comicios.splice(this.comicios.indexOf(comicio), 1);
        });
        
    }

}
