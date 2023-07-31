import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRouteComponent } from './dialog-route.component';

describe('DialogRouteComponent', () => {
  let component: DialogRouteComponent;
  let fixture: ComponentFixture<DialogRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRouteComponent]
    });
    fixture = TestBed.createComponent(DialogRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
