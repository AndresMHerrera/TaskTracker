export class AuthInfoLocalStorageModel {
  isLoggedIn: boolean;

  constructor(init?: Partial<AuthInfoLocalStorageModel>) {
    Object.assign(this, init);
  }
}
