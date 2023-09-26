import { TestBed } from '@angular/core/testing';

import { UpdateShipmentsService } from './update-shipments.service';

describe('UpdateShipmentsService', () => {
  let service: UpdateShipmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateShipmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
