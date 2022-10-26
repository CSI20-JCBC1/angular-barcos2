import { Component, OnInit } from '@angular/core';

import { Barco } from '../barco';
import { BuquesService } from '../buques.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BuquesComponent implements OnInit {

  
  selectedBarco?: Barco;

  barcos:Barco[]=[];

  constructor(private buquesService:BuquesService) { }

  ngOnInit(): void {
    this.getBarcos;
  }

  onSelect(barco: Barco): void {
    this.buquesService.getBarcos()
    .subscribe(barco => this.barcos=barco );
   

  }

  getBarcos(): void {
    this.buquesService.getBarcos()
        .subscribe(barcos => this.barcos = barcos);
  }

}
