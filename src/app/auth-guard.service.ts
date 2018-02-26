import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.checkLogin()) {
      return true;
    }
  }

  checkLogin(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

}
