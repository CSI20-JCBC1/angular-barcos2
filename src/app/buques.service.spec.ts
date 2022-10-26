import { TestBed } from '@angular/core/testing';

import { BuquesService } from './buques.service';

describe('BuquesService', () => {
  let service: BuquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
