import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Alert } from 'src/app/model';
import { AlertService } from 'src/app/services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
   }

  get alert(): Observable<Alert | null> {
    return this.alertService.alert;
  }

  getType(alert: Alert): string {
    return `alert-${alert.type.toString()}`;
  }

  close(): void {
    this.alertService.clear();
  }

}
