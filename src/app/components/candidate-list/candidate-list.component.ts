import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Candidate } from 'src/app/model';
import { CandidateService } from 'src/app/services';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidateList: BehaviorSubject<Candidate[] | null> = new BehaviorSubject<Candidate[] | null>(null);

  constructor(
    private candidateService: CandidateService
  ) { }

  ngOnInit(): void {
    lastValueFrom(this.candidateService.getCandidates()).then(
      list => this.candidateList.next(list)
    );
  }

}
