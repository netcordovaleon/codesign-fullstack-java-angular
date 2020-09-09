import { environment } from 'src/environments/environment';

export class UserEndpoint {
  public static userLogin = `${environment.apiURL}${environment.apiVersion}login`;
}
