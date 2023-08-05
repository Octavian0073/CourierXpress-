import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShipmentComponent } from './dialog-shipment.component';

describe('DialogShipmentComponent', () => {
  let component: DialogShipmentComponent;
  let fixture: ComponentFixture<DialogShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShipmentComponent]
    });
    fixture = TestBed.createComponent(DialogShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
