import { TestBed } from '@angular/core/testing';

import { ElectionCandidateRegisterService } from './election-candidate-register.service';

describe('ElectionCandidateRegisterService', () => {
  let service: ElectionCandidateRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionCandidateRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
