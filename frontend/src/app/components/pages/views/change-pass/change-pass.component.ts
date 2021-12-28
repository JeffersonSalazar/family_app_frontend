import { Component, OnInit } from '@angular/core';

// import packages to implement forms
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";

// import packages to implement router
// import { Router } from '@angular/router';

// import authService and tokenService
import { AuthService } from "../../../../services/auth/auth.service";
// import { TokenService } from '../../../../services/token/token.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})

export class ChangePassComponent implements OnInit {

  formChangePass: FormGroup; // variable to store the form data

  // asyncValidation: boolean; // variable to show the async validations

  // showPass: boolean = false;

  // injections in the constructor
  constructor(
    private _builder: FormBuilder,
    // private _router: Router,
    private authServ: AuthService,
    // private tokenServ: TokenService
  ) { }

  ngOnInit() {
    this.formSchema(); // formSchema method trigger
  };

  // formadachema: method in charge of containing the form fields
  formSchema(): void {
    this.formChangePass = this._builder.group({
      email: ['cami@gmail.com'],
      password: ['Cami1010'],
      newPassword: ['c20'],
      confirmPassword: ['c20']
    });
  };

  get errorPass(): AbstractControl { // getter error for password field
    return this.formChangePass.controls['password'];
  };

  get errorNewPass(): AbstractControl { // getter error for password field
    return this.formChangePass.controls['newPassword'];
  };

  get errorConfirmPass(): AbstractControl { // getter error for password field
    return this.formChangePass.controls['confirmPassword'];
  };

  // event defined in signinComponent
  confirmChangePassword(e: Event) {
    e.preventDefault();

    // calling of the methods defined in authServ
    this.authServ.changePassword(this.formChangePass.value).subscribe(
      res => {
        // this.tokenServ.saveToken(res.token);
        console.log(res);
        // this.tokenServ.saveDataUser(res);
        // this._router.navigateByUrl('/pages/home');
      }, err => console.log(err)
      // err => {
      //   if (err.status === 401) {
      //     console.log(err);
      //     return this.asyncValidation = true;
      //   };
      // }
    );
  };

}
