import { Injectable } from '@angular/core';
import { IUser, IUsers } from '@shared/components/cards/card-user/icard-user.metadata';
import { Observable, of } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'environments/environment.dev';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = environment.uri
  public isProduction = environment.production

  constructor(private http:HttpClient){}

  error(error: HttpErrorResponse){
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else{
      errorMsg = `Error Code ${error.status}\nMessage:_${error.message}`;
    }
    return of({error:true, msg:errorMsg, data: null })
  }

  /**
   * Tomar todos los usuarios
   */
  getAllUser(): Observable<{error:boolean, msg:string, data: IUsers}>{
    const response = {error: false, msg: '', data: {} as IUsers}
    return this.http.get<IUsers>(this.url + 'users')
    .pipe(
      map(
        r => {
          response.data.users = r.users;
          return response;
        }
      ),
      catchError(() => of(response))
    );
  }

  /**
   * Tomar un usuario por su ID
   */
  getUserById(id: number): Observable<{error:boolean, msg:string, data:IUser}>{
    const response = {error: false, msg: '', data: {} as IUser }
    return this.http.get<IUser>(this.url + 'users/' + id)
    .pipe(
      map(
        r => {
          response.data = r;
          console.log(r)
          return response;
        }
      ),
      catchError(() => of(response))
    );
  }


}