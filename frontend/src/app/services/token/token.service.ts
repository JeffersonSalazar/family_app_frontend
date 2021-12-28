/* 
  NOTE: this service is implemented in
  frontend\src\app\components\auth\views\signup\signup.component.ts
  frontend\src\app\components\auth\views\signin\signin.component.ts
  frontend\src\app\components\pages\templates\header\header.component.ts
*/

import { Injectable } from '@angular/core';

// import interface and the class
import { AuthInterface } from 'src/app/models/interfaces/auth/auth';
import { KeysLocalStorage } from "../../models/classes/storage/key";

@Injectable({
    providedIn: 'root'
})

export class TokenService {

    // saveDataUser: method that saves in localstorage the data that comes from the backend
    saveDataUser(data: AuthInterface): void {
        localStorage.setItem(KeysLocalStorage.DATA_USER, JSON.stringify(data));
    };

    saveTokenUser(data: AuthInterface): void {
        localStorage.setItem(KeysLocalStorage.TOKEN_USER, JSON.stringify(data));
    };

    // removeDataUser: method that removes data from local storage
    removeDataUser(): void {
        localStorage.removeItem(KeysLocalStorage.DATA_USER);
    };
}
