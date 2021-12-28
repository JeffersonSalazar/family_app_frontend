import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { GuardService } from 'src/app/services/guard/guard.service';

@Injectable({
  providedIn: 'root'
})

export class CanGuard implements CanActivate {

  constructor(
    private _router: Router,
    private guardServ: GuardService
  ) { }

  canActivate(): boolean {

    let keyValue = this.guardServ.getTokenUser();

    if (keyValue === false) {
      this._router.navigate(['/auth/signup']);
    } else {
      return true;
    }
  };

}
