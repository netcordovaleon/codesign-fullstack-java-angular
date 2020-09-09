import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.services';
import { USER_LOGGIN } from 'src/app/shared/util/authentication.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authenticationService: UserService,
    private readonly router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authenticationService.validateIfUserIsLogged();
    if (!isAuthenticated) {
      this.router.navigate(['/']);
    }
    return isAuthenticated;
  }
}
