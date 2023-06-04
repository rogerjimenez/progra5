import { TestBed } from '@angular/core/testing';

import { AdministradorServiciosService } from './administrador-servicios.service';

describe('AdministradorServiciosService', () => {
  let service: AdministradorServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradorServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
