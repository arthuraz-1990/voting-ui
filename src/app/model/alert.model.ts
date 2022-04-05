export enum AlertType {
  SUCCESS, WARNING, INFO, DANGER
}

export interface Alert {
    type: AlertType;
    message: string;
}
