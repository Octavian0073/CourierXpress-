import { TestBed } from '@angular/core/testing';

import { PackageDialogService } from './package-dialog.service';

describe('PackageDialogService', () => {
  let service: PackageDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
