import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; //Camila inseriu

@Component({
  selector: 'app-cadastro-ingrediente',
  templateUrl: './cadastro-ingrediente.component.html',
  styleUrls: ['./cadastro-ingrediente.component.css']
})
export class CadastroIngredienteComponent implements OnInit {
  

  receita: Array<any>;

  constructor() { }

  ngOnInit() {
    this.receita = new Array<any>();
  }
  form_submit(f: NgForm){
    this.receita.push({
      quantidade: f.form.controls.quantidade.value,
      ingrediente: f.form.controls.ingrediente.value
    })
    console.log(this.receita);

  }
}
