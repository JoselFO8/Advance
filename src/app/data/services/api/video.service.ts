import { Injectable } from '@angular/core';
import { IVideos } from '@shared/components/cards/card-video/icard-video.metadata';
import { Observable, of } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public url = environment.uri;
  public isProduction = environment.production

  constructor(
    private http: HttpClient
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

  getAllVideos(): Observable<{error: boolean, msg: string, data: IVideos }> {
    const response = {error: false, msg: '', data: {} as IVideos}
    return this.http.get<IVideos>(this.url + 'videos')
    .pipe(
      map(
        r => {
          console.log("desde servicio getAllVideos",r);
          
          response.data = r;
          return response
        }
      ),
      catchError(() => of(response))
    )
  }
}