import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcResultadosComponent } from './abc-resultados.component';

describe('AbcResultadosComponent', () => {
  let component: AbcResultadosComponent;
  let fixture: ComponentFixture<AbcResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcResultadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
