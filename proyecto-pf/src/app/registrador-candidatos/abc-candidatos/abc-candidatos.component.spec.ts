import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCandidatosComponent } from './abc-candidatos.component';

describe('AbcCandidatosComponent', () => {
  let component: AbcCandidatosComponent;
  let fixture: ComponentFixture<AbcCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcCandidatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
