import { Injectable } from '@angular/core';

import { KeysLocalStorage } from "../../models/classes/storage/key";

@Injectable({
    providedIn: 'root'
})

export class GuardService {

    getDataUser(): boolean {
        let keyValue1 = localStorage.getItem(KeysLocalStorage.DATA_USER);

        if (keyValue1 === null) {
            return false;
        } else {
            return true;
        };
    };

    getTokenUser(): boolean {
        let keyValue2 = localStorage.getItem(KeysLocalStorage.TOKEN_USER);

        if (keyValue2 === null) {
            return false;
        } else {
            return true;
        };
    };

}
