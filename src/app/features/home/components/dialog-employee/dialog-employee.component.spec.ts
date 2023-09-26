import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmployeeComponent } from './dialog-employee.component';

describe('DialogComponent', () => {
  let component: DialogEmployeeComponent;
  let fixture: ComponentFixture<DialogEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEmployeeComponent]
    });
    fixture = TestBed.createComponent(DialogEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
