import { CandidateResult } from "./candidate-result.model";

export class ElectionResult {

  constructor(
    public electionId: string,
    public totalVotes: number,
    public candidateResultList: CandidateResult[]
  ) {}

}
