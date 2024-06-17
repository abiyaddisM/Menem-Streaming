import { TestBed } from '@angular/core/testing';

import { GetTrendingNowService } from './get-trending-now.service';

describe('GetTrendingNowService', () => {
  let service: GetTrendingNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTrendingNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
