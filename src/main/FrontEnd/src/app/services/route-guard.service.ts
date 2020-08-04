import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authService: AuthenticationServiceService, 
          private router: Router) { }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['homePage']);
      return false;
    }
  }
}
