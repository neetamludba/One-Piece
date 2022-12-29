import { TestBed } from '@angular/core/testing';

import { RevolutionaryArmyService } from './revolutionary-army.service';

describe('RevolutionaryArmyService', () => {
  let service: RevolutionaryArmyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevolutionaryArmyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
