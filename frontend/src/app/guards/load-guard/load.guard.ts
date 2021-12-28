import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { GuardService } from "../../services/guard/guard.service";

@Injectable({
    providedIn: 'root'
})

export class LoadGuard implements CanLoad {

    constructor(
        private guardServ: GuardService,
        private _router: Router
    ) { }

    canLoad(): boolean {
        let keyValue = this.guardServ.getDataUser();

        if (keyValue === false) {
            this._router.navigateByUrl('/auth/signup');
        } else {
            return true;
        };
    };

}
