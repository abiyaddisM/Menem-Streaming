import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecCardsComponent } from './main-rec-cards.component';

describe('MainRecCardsComponent', () => {
  let component: MainRecCardsComponent;
  let fixture: ComponentFixture<MainRecCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainRecCardsComponent]
    });
    fixture = TestBed.createComponent(MainRecCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
