import { TestBed } from '@angular/core/testing';

import { NodemarkerService } from './nodemarker.service';

describe('NodemarkerService', () => {
  let service: NodemarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodemarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
