import { TestBed } from '@angular/core/testing';

import { AdjectifService } from './adjectif.service';

describe('AdjectifService', () => {
  let service: AdjectifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjectifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
