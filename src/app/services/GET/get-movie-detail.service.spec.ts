import { TestBed } from '@angular/core/testing';

import { GetMovieDetailService } from './get-movie-detail.service';

describe('GetMovieDetailService', () => {
  let service: GetMovieDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
