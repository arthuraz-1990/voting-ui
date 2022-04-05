export class Vote {

  constructor(
    public electionId: string,
    public candidateId: string,
    public userId: string,
    public voteTime?: string
  ) {}
}
