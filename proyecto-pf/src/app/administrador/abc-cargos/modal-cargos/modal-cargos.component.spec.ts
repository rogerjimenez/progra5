import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCargosComponent } from './modal-cargos.component';

describe('ModalCargosComponent', () => {
  let component: ModalCargosComponent;
  let fixture: ComponentFixture<ModalCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCargosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
