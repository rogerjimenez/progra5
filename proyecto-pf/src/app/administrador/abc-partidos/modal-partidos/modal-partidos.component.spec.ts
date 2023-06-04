import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartidosComponent } from './modal-partidos.component';

describe('ModalPartidosComponent', () => {
  let component: ModalPartidosComponent;
  let fixture: ComponentFixture<ModalPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
