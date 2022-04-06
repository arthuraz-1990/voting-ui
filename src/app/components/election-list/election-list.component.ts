import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Election } from 'src/app/model';
import { ElectionService } from 'src/app/services';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionListComponent implements OnInit {

  electionList: BehaviorSubject<Election[] | null> = new BehaviorSubject<Election[] | null>(null);

  constructor(
    private electionService: ElectionService
  ) { }

  ngOnInit(): void {
    this.electionService.getElections().subscribe(
      electionList => this.electionList.next(electionList)
    );
  }

}
