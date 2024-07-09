import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowViewPageComponent } from './tv-show-view-page.component';

describe('TvShowViewPageComponent', () => {
  let component: TvShowViewPageComponent;
  let fixture: ComponentFixture<TvShowViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowViewPageComponent]
    });
    fixture = TestBed.createComponent(TvShowViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
