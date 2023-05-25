import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcComiciosComponent } from './abc-comicios.component';

describe('AbcComiciosComponent', () => {
  let component: AbcComiciosComponent;
  let fixture: ComponentFixture<AbcComiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcComiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcComiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
