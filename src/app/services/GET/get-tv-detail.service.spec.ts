import { TestBed } from '@angular/core/testing';

import { GetTvDetailService } from './get-tv-detail.service';

describe('GetTvDetailService', () => {
  let service: GetTvDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTvDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
