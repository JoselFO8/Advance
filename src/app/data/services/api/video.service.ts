import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { environment } from 'environments/environment.dev';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public url = environment.uri;
  public isProduction = environment.production

  constructor(
    private http: HttpErrorResponse
  ) {}

  error(error: HttpErrorResponse) {
    let errorMsg = '';

    if(error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error code ${error.status}\nMessage:_${error.message}`
    }

    return of ({
      error: true,
      msg: errorMsg,
      data: null
    })
  }

  // getAllVideos(): Observable<{error: boolean, msg: string, data: IUser}> {
  //   const response = {error: false, msg: '', data: {} as IUser}
  // }
}
