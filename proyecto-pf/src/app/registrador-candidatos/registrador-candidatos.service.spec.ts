import { TestBed } from '@angular/core/testing';

import { RegistradorCandidatosService } from './registrador-candidatos.service';

describe('RegistradorCandidatosService', () => {
  let service: RegistradorCandidatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistradorCandidatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
