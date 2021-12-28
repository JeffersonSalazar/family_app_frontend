import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { KeysLocalStorage } from 'src/app/models/classes/storage/key';
import { AuthInterface } from 'src/app/models/interfaces/auth/auth';

import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  hide: boolean = true;
  show: boolean = false;

  nitName: AuthInterface[] = [];

  constructor(
    private _router: Router,
    private tokenServ: TokenService
  ) { }

  ngOnInit() {
    this.nitName = JSON.parse(localStorage.getItem(KeysLocalStorage.DATA_USER));
  }

  logout(e: Event): void {
    e.preventDefault();

    this.tokenServ.removeDataUser();

    setTimeout(() => {
      this._router.navigateByUrl('/auth/signin');
    }, 2000);
  }

  showMenu(e: Event) {
    e.preventDefault();

    this.hide = !this.hide;
    this.show = !this.show;
  };
}
