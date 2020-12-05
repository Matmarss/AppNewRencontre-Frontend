import { TestBed } from '@angular/core/testing';

import { ComparaisonoService } from './comparaisono.service';

describe('ComparaisonoService', () => {
  let service: ComparaisonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparaisonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
