import { TestBed, inject } from '@angular/core/testing';

import { CheckScoresService } from './check-scores.service';

describe('CheckScoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckScoresService]
    });
  });

  it('should be created', inject([CheckScoresService], (service: CheckScoresService) => {
    expect(service).toBeTruthy();
  }));
});
