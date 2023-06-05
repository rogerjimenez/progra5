import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComiciosComponent } from './modal-comicios.component';

describe('ModalComiciosComponent', () => {
  let component: ModalComiciosComponent;
  let fixture: ComponentFixture<ModalComiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
