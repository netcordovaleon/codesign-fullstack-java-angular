export interface IUserModel {
  code: number;
  name: string;
  password: string;
}


export class UserModel {
  code: number;
  name: string;
  password: string;
  constructor(user: IUserModel) {
    this.code = user.code || null;
    this.name = user.name || '';
    this.password = user.password || '';
  }
}
