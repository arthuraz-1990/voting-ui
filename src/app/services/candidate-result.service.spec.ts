import { TestBed } from '@angular/core/testing';

import { CandidateResultService } from './candidate-result.service';

describe('CandidateResultService', () => {
  let service: CandidateResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
