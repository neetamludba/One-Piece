import { TestBed } from '@angular/core/testing';

import { PirateCrewService } from './pirate-crew.service';

describe('PiratesService', () => {
  let service: PirateCrewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PirateCrewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
