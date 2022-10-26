import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Barco } from '../barco';
import { BuquesService } from '../buques.service';

@Component({
  selector: 'app-barco-detail',
  templateUrl: './barco-detail.component.html',
  styleUrls: ['./barco-detail.component.css']
})
export class BarcoDetailComponent implements OnInit {
  barco: Barco | undefined;

  constructor(
    private route: ActivatedRoute,
    private buquesService: BuquesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBarco();
  }

  getBarco(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buquesService.getBarco(id)
    .subscribe(barco=>this.barco=barco)
  }

  goBack(): void {
    this.location.back();
  }

}