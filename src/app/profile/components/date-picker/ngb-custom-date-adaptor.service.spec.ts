import { TestBed } from '@angular/core/testing';

import { NgbCustomDateAdaptorService } from './ngb-custom-date-adaptor.service';

describe('NgbCustomDateAdaptorService', () => {
  let service: NgbCustomDateAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbCustomDateAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
