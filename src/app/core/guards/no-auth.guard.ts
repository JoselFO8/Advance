import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { INTERNAL_ROUTES } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 
    ): boolean {
    const currentUser = this.authService.getUser
      console.log("currentUser", currentUser);
      if(currentUser.fullname) {
        this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST)
        return false;
      }
    return true
  }
  
}
