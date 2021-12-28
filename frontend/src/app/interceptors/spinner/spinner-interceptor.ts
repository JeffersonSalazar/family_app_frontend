import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()

export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerServ: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerServ.startSpinner();

        return next.handle(req).pipe(
            finalize(() => this.spinnerServ.stopSpinner())
        );
    };
}
