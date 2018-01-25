import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-careceita',
  templateUrl: './careceita.component.html',
  styleUrls: ['./careceita.component.css']
})
export class CareceitaComponent implements OnInit {
  @Input() dadosReceita;

  constructor() { }

  ngOnInit() {
  }

}
