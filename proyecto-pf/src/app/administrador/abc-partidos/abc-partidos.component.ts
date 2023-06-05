import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AdministradorServiciosService } from '../administrador-servicios.service';
import { FormGroup } from '@angular/forms';
import { Partido } from 'src/app/interfaces/Partido';
import { ModalPartidosComponent } from './modal-partidos/modal-partidos.component';
import { CamposService } from 'src/app/servicios/campos.service';

@Component({
  selector: 'app-abc-partidos',
  templateUrl: './abc-partidos.component.html',
  styleUrls: ['./abc-partidos.component.css']
})
export class AbcPartidosComponent implements OnInit {

    modalRef?: BsModalRef;
    public accion: string = 'Agregar'
    public campoForm: FormGroup;
    public partidos: Partido[] = [];
    constructor(
        private modalService: BsModalService,
        private administradorService: AdministradorServiciosService
    ) {
        this.campoForm = new FormGroup({});
    }

    ngOnInit(): void {
        this.administradorService.ObtenerPartidos()
            .subscribe(data => {
                this.partidos = data.splice(0, 10);
            });
    }

    public editarPartido(partido?: Partido): void {
        const initialState: ModalOptions = {
            initialState: {
                esActualizacion: partido ? true : false,
                partido
            }
        };
        this.modalRef = this.modalService.show(ModalPartidosComponent, initialState);
        this.modalRef.content.campoModificado$
            .subscribe((data:Partido) => {
                if (partido) {
                    let partidoEditado = this.partidos.find(item => item.idPartido = partido.idPartido);
                    partidoEditado = data;
                } else {
                    this.partidos.push(data);
                }
            })
    }

    public eliminarPartido(partido: Partido): void {
        this.administradorService.eliminarPartido(partido).subscribe(data => {
            this.partidos.splice(this.partidos.indexOf(partido), 1);
        });
        
    }



}
