import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from 'src/backend';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService : LoginService    
  ) {  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
