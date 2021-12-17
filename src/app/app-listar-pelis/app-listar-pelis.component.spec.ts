import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListarPelisComponent } from './app-listar-pelis.component';

describe('AppListarPelisComponent', () => {
  let component: AppListarPelisComponent;
  let fixture: ComponentFixture<AppListarPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListarPelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListarPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
