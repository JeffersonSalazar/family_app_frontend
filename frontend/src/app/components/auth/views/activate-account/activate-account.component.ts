import { Component, OnInit } from '@angular/core';

// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// import { KeysLocalStorage } from 'src/app/models/classes/storage/key';
// import { AuthInterface } from 'src/app/models/interfaces/auth/auth';
// import { AuthService } from 'src/app/services/auth/auth.service';
// import { TokenService } from 'src/app/services/token/token.service';

// import packages to implement router
// import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})

export class ActivateAccountComponent implements OnInit {

  // activateForm: FormGroup;

  // nitname: AuthInterface[] = [];

  // asyncValidation: boolean;

  constructor(
    // private _builder: FormBuilder,
    // private _router: Router,
    // private authServ: AuthService,
    // private tokenServ: TokenService
  ) {
    // this.nitname = JSON.parse(localStorage.getItem(KeysLocalStorage.TOKEN_USER));
  }

  ngOnInit() {
    // this.formSchema();
  }

  // formSchema(): void {
  //   this.activateForm = this._builder.group({
  //     token: [''],
  //   })
  // };

  // activateAccount(e: Event): void {
  //   e.preventDefault();

  //   this.authServ.activateAccount(this.activateForm.value).subscribe(
  //     res => {
  //       localStorage.removeItem(KeysLocalStorage.TOKEN_USER);
  //       this.tokenServ.saveDataUser(res);
  //       this._router.navigateByUrl('/pages/home');
  //     }, err => {
  //       if (err.status === 400) {
  //         return this.asyncValidation = true;
  //       }
  //       console.log(err)
  //     }
  //   )
  // }
}
