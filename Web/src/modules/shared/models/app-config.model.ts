export class AppConfigModel {
  apiBaseUrl: string;

  constructor(init?: Partial<AppConfigModel>) {
    Object.assign(this, init);
  }
}
