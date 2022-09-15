import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@data/services/api/auth.service";
import { Observable } from "rxjs";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.getUser;
        const isAuthenticated = currentUser && currentUser.token;
        // if(isAuthenticated || req.url !== API_ROUTES.AUTH.LOGIN) { // No se busca autenticacion o un token desde login
        console.log('isAuthenticated', isAuthenticated);
        
        if(isAuthenticated) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            })
        }
        return next.handle(req)
    }
}