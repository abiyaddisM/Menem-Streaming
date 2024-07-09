import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewPageComponent } from './movie-view-page.component';

describe('MovieViewPageComponent', () => {
  let component: MovieViewPageComponent;
  let fixture: ComponentFixture<MovieViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieViewPageComponent]
    });
    fixture = TestBed.createComponent(MovieViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
