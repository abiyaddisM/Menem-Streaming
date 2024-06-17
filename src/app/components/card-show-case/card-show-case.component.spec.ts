import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShowCaseComponent } from './card-show-case.component';

describe('CardShowCaseComponent', () => {
  let component: CardShowCaseComponent;
  let fixture: ComponentFixture<CardShowCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardShowCaseComponent]
    });
    fixture = TestBed.createComponent(CardShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
