import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIngredienteComponent } from './cadastro-ingrediente.component';

describe('CadastroIngredienteComponent', () => {
  let component: CadastroIngredienteComponent;
  let fixture: ComponentFixture<CadastroIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
