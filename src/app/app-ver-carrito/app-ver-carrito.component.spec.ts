import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVerCarritoComponent } from './app-ver-carrito.component';

describe('AppVerCarritoComponent', () => {
  let component: AppVerCarritoComponent;
  let fixture: ComponentFixture<AppVerCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppVerCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVerCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
