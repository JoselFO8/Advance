import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_ROUTES } from "@data/constants/routes";
import { catchError, Observable, throwError } from "rxjs";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error) => {
                console.log('error-interceptor', error.status);
                if ( [401, 403, 404].indexOf(error.status) !== -1 && req.url !== API_ROUTES.AUTH.LOGIN) {
                    console.log('interceptor funcionando');
                    
                    this.router.navigateByUrl('/' + error.status);
                }
                return throwError(error);
            })
        )
    }
}