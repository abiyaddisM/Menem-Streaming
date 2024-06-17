import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSecIndComponent } from './slider-sec-ind.component';

describe('SliderSecIndComponent', () => {
  let component: SliderSecIndComponent;
  let fixture: ComponentFixture<SliderSecIndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderSecIndComponent]
    });
    fixture = TestBed.createComponent(SliderSecIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
