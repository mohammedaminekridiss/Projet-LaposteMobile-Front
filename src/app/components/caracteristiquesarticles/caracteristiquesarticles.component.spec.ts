import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesarticlesComponent } from './caracteristiquesarticles.component';

describe('CaracteristiquesarticlesComponent', () => {
  let component: CaracteristiquesarticlesComponent;
  let fixture: ComponentFixture<CaracteristiquesarticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristiquesarticlesComponent]
    });
    fixture = TestBed.createComponent(CaracteristiquesarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
