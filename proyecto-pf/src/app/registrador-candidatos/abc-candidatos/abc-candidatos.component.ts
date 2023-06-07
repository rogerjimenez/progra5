import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Candidato } from 'src/app/interfaces/Candidato';
import { RegistradorCandidatosService } from '../registrador-candidatos.service';
import { FormGroup } from '@angular/forms';
import { ModalCandidatosComponent } from './modal-candidatos/modal-candidatos.component';

@Component({
  selector: 'app-abc-candidatos',
  templateUrl: './abc-candidatos.component.html',
  styleUrls: ['./abc-candidatos.component.css']
})
export class AbcCandidatosComponent implements OnInit {

  modalRef?: BsModalRef;
    public accion: string = 'Agregar'
    public candidatoForm: FormGroup;
    public candidatos: Candidato[] = [];
    constructor(
        private modalService: BsModalService,
        private registradorCandidatosService: RegistradorCandidatosService
    ) {
        this.candidatoForm = new FormGroup({});
    }

    ngOnInit(): void {
        this.registradorCandidatosService.ObtenerCandidatos()
            .subscribe(data => {
                this.candidatos = data.splice(0, 10);
            });
    }

    public editarCandidato(candidato?: Candidato): void {
        const initialState: ModalOptions = {
            initialState: {
                esActualizacion: candidato ? true : false,
                candidato
            }
        };
        this.modalRef = this.modalService.show(ModalCandidatosComponent, initialState);
        this.modalRef.content.campoModificado$
            .subscribe((data:Candidato) => {
                if (candidato) {
                    let partidoEditado = this.candidatos.find(item => item.idCandidato = candidato.idCandidato);
                    partidoEditado = data;
                } else {
                    this.candidatos.push(data);
                    this.registradorCandidatosService.ObtenerCandidatos()
                    .subscribe(data => {
                        this.candidatos = data.splice(0, 10);
                    });
                }
            })
    }

    public eliminarCandidato(candidato: Candidato): void {
        this.registradorCandidatosService.eliminarCandidato(candidato).subscribe(data => {
            this.candidatos.splice(this.candidatos.indexOf(candidato), 1);
        });
        
    }

}
