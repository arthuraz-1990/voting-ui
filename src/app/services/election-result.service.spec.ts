import { TestBed } from '@angular/core/testing';

import { ElectionResultService } from './election-result.service';

describe('ElectionResultService', () => {
  let service: ElectionResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
