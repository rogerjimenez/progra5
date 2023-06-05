import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCargosComponent } from './abc-cargos.component';

describe('AbcCargosComponent', () => {
  let component: AbcCargosComponent;
  let fixture: ComponentFixture<AbcCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcCargosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
