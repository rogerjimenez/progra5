import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcPartidosComponent } from './abc-partidos.component';

describe('AbcPartidosComponent', () => {
  let component: AbcPartidosComponent;
  let fixture: ComponentFixture<AbcPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcPartidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
