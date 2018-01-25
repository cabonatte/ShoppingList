import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Camila incluiu

import { AppComponent } from './app.component';
import { CadastroIngredienteComponent } from './cadastro-ingrediente/cadastro-ingrediente.component';
import { CareceitaComponent } from './careceita/careceita.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroIngredienteComponent,
    CareceitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Camila Incluiu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
