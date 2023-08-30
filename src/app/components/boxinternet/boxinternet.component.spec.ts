import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxinternetComponent } from './boxinternet.component';

describe('BoxinternetComponent', () => {
  let component: BoxinternetComponent;
  let fixture: ComponentFixture<BoxinternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxinternetComponent]
    });
    fixture = TestBed.createComponent(BoxinternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
