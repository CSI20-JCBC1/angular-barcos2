import { Component, OnInit } from '@angular/core';
import { Barco } from '../barco';
import { BuquesService } from '../buques.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  barcos: Barco[] = [];

  constructor (private buquesService: BuquesService) { }


  ngOnInit(): void {
    this.getBarcos();
  }

  getBarcos(): void {
    this.buquesService.getBarcos()
      .subscribe(barcos => this.barcos = barcos.slice(0, 4));
  }
}
