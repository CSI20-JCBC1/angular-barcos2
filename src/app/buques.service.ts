import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Barco } from './barco';
import { BARCOS } from './mock-barcos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class BuquesService {

  constructor(private messageService: MessageService) { }

  getBarcos(): Observable<Barco[]> {
    const barcos = of(BARCOS);
    this.messageService.add('BuqueService: fetched barcos');
    return barcos;
  }

  getBarco(id: number): Observable<Barco> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const barco = BARCOS.find(h => h.id === id)!;
    this.messageService.add(`BuqueService: fetched hero id=${id}`);
    return of(barco);
  }
}