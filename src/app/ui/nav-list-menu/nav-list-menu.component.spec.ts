import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListMenuComponent } from './nav-list-menu.component';

describe('NavListMenuComponent', () => {
  let component: NavListMenuComponent;
  let fixture: ComponentFixture<NavListMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavListMenuComponent]
    });
    fixture = TestBed.createComponent(NavListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
