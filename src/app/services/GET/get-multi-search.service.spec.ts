import { TestBed } from '@angular/core/testing';

import { GetMultiSearchService } from './get-multi-search.service';

describe('GetMultiSearchService', () => {
  let service: GetMultiSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMultiSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
