import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviationSideBarComponent } from './naviation-side-bar.component';

describe('NaviationSideBarComponent', () => {
  let component: NaviationSideBarComponent;
  let fixture: ComponentFixture<NaviationSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviationSideBarComponent]
    });
    fixture = TestBed.createComponent(NaviationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
