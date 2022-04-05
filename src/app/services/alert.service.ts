import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alert, AlertType } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private readonly $alert: BehaviorSubject<Alert | null> = new BehaviorSubject<Alert | null>(null);

  get alert(): Observable<Alert | null> {
    return this.$alert.asObservable();
  }

  clear(): void {
    this.$alert.next(null);
  }

  show(type: AlertType, message: string): void {
    this.$alert.next({type, message});
  }
}
