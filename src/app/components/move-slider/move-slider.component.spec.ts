import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveSliderComponent } from './move-slider.component';

describe('MoveSliderComponent', () => {
  let component: MoveSliderComponent;
  let fixture: ComponentFixture<MoveSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveSliderComponent]
    });
    fixture = TestBed.createComponent(MoveSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
