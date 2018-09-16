import { TestBed, inject } from '@angular/core/testing';

import { PollutionService } from './pollution.service';

describe('PollutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollutionService]
    });
  });

  it('should be created', inject([PollutionService], (service: PollutionService) => {
    expect(service).toBeTruthy();
  }));
});
