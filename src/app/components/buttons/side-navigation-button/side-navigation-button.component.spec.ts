import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationButtonComponent } from './side-navigation-button.component';

describe('SideNavigationButtonComponent', () => {
  let component: SideNavigationButtonComponent;
  let fixture: ComponentFixture<SideNavigationButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavigationButtonComponent]
    });
    fixture = TestBed.createComponent(SideNavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
