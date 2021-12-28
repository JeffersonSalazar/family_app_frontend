/* 
  NOTE: this service is implemented in
  frontend\src\app\components\auth\templates\spinner\spinner.component.ts
  frontend\src\app\interceptors\spinner\spinner-interceptor.ts
*/

import { Injectable } from '@angular/core';

// import package to implement rxjs
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpinnerService {

  public spinner = new Subject<boolean>(); // saving the value subject

  // startSpinner: method to start the spinner
  startSpinner(): void {
    this.spinner.next(true);
  };

  // stopSpinner: method to stop the spinner
  stopSpinner(): void {
    this.spinner.next(false);
  };
}

