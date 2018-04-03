import { TestBed, inject } from '@angular/core/testing';

import { SqlgeneratorService } from './sqlgenerator.service';

describe('SqlgeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlgeneratorService]
    });
  });

  it('should be created', inject([SqlgeneratorService], (service: SqlgeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
