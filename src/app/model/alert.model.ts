export enum AlertType {
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  DANGER = 'danger'
}

export interface Alert {
    type: AlertType;
    message: string;
}
