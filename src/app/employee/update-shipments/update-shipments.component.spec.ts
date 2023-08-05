import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipmentsComponent } from './update-shipments.component';

describe('UpdateShipmentsComponent', () => {
  let component: UpdateShipmentsComponent;
  let fixture: ComponentFixture<UpdateShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShipmentsComponent]
    });
    fixture = TestBed.createComponent(UpdateShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
