import { TestBed } from '@angular/core/testing';

import { RandowService } from './randow.service';

describe('RandowService', () => {
  let service: RandowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
