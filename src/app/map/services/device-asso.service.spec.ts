import { TestBed } from '@angular/core/testing';

import { DeviceAssoService } from './device-asso.service';

describe('DeviceAssoService', () => {
  let service: DeviceAssoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceAssoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
