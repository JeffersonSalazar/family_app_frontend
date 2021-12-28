import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err) =>
      this.errorHandler(err))
    );
  };

  /* 
    this errorHandler method captures the response sent by the server 
    to the client
  */
  errorHandler(err: HttpErrorResponse): Observable<never> {
    return throwError(err);
  };
}

