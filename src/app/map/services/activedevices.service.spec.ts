import { TestBed } from '@angular/core/testing';

import { ActivedevicesService } from './activedevices.service';

describe('ActivedevicesService', () => {
  let service: ActivedevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivedevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
