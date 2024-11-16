import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistViewPageComponent } from './playlist-view-page.component';

describe('PlaylistViewPageComponent', () => {
  let component: PlaylistViewPageComponent;
  let fixture: ComponentFixture<PlaylistViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
