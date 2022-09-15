import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { INTERNAL_ROUTES } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const currentUser = this.authService.getUser
      console.log("currentUser-authguard", currentUser);
      if(currentUser.token) {
        console.log('RETURN TRUE')
        
        return true;
      }
      console.log('REDIRIGIDO')
      this.router.navigate([INTERNAL_ROUTES.AUTH_LOGIN], {
        queryParams: {returnUrl: state.url}
      })
      console.log('RETURN FALSE')
      return false
  }
  
}
