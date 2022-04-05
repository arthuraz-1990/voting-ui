import { Candidate } from "./candidate.model";

export class ElectionCandidateRegister {

  constructor(
    public electionId: string,
    public candidateList: Candidate[]
  ) {}
}
