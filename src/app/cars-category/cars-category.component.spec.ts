import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCategoryComponent } from './cars-category.component';

describe('CarsCategoryComponent', () => {
  let component: CarsCategoryComponent;
  let fixture: ComponentFixture<CarsCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsCategoryComponent]
    });
    fixture = TestBed.createComponent(CarsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
