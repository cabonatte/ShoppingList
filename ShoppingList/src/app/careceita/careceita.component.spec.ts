import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareceitaComponent } from './careceita.component';

describe('CareceitaComponent', () => {
  let component: CareceitaComponent;
  let fixture: ComponentFixture<CareceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
