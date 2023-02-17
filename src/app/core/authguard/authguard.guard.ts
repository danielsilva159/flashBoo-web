import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.IsloggedIn()) {
      this.refleshToken();
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  refleshToken() {
    this.auth.refresh()?.subscribe({
      error: (err) => {
        console.log(err);

        this.router.navigate(['/login']);
        this.loginService.logout();
      },
    });
  }
}
