import { Component, OnInit } from '@angular/core';
import { Barco } from '../barco';
import { BARCOS } from '../mock-barcos';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit {

  barcos = BARCOS;
  selectedBarco?: Barco;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(barco: Barco): void {
    this.selectedBarco = barco;
   
  }


}
