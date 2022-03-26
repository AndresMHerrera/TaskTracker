export class LoginResponseModel {
  isLoggedIn: boolean;

  constructor(init?: Partial<LoginResponseModel>) {
    Object.assign(this, init);
  }
}
