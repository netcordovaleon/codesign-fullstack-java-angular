import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserModel } from '../models/user.model';
import { UserEndpoint } from '../endpoints/user.endpoint';
import { StorageService } from '../util/storage-manager';
import { USER_LOGGIN } from '../util/authentication.constant';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private readonly http: HttpService, private readonly storageServices: StorageService) { }

  loginUser(param: IUserModel): Observable<boolean> {
    return this.http
      .post<any>(UserEndpoint.userLogin, param)
      .pipe(map((item: IUserModel) => {
        if (item) {
          this.storageServices.setItem(USER_LOGGIN, item.name); // Aqui deberia registrar un TOKEN,
          // por ser un ejemplo solo se registra el nombre de usuario
          return true;
        }
      }));
  }

  validateIfUserIsLogged(): boolean {
      return !!this.storageServices.getItem(USER_LOGGIN);
  }

}
