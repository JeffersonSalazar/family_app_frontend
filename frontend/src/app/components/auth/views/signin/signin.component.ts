import { Component, OnInit } from '@angular/core';

// import packages to implement @angular/forms
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";

// import packages to implement @angular/router
import { Router } from '@angular/router';
import { KeysLocalStorage } from 'src/app/models/classes/storage/key';

// import authService and tokenService
import { AuthService } from "../../../../services/auth/auth.service";
import { TokenService } from '../../../../services/token/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  /*
    this variable stores the data entered by a user in the form
  */
  signinForm: FormGroup;

  /*
    this variable changes the state of the ngif allowing us to display
    the user the password entered in the password field
  */
  showPass: boolean;

  /*
    this variable changes the state of the ngif allowing us to desplay
    the user the message of the async validations
  */
  asyncValidation: boolean;

  /*
    injection of packages and services
  */
  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private authServ: AuthService,
    private tokenServ: TokenService
  ) { }

  ngOnInit() {
    /*
      the ngoninit is in charge of executing the formSchema method once the 
      application starts
    */
    this.formSchema();
  };

  /*
    formSchema method: in charge of containing and executing the form fields
  */
  formSchema(): void {
    this.signinForm = this._builder.group({
      email: ['user@gmail.com'],
      password: ['User1010']
    });
  };

  get errorPass(): AbstractControl { /* error catcher for password field */
    return this.signinForm.controls['password'];
  };

  /*
    signin method defined in signinComponent, in charge of sending the 
    data entered in the form, also makes the calls to the service 
    to execute the methods in charge of the requests to the server
  */
  signin(e: Event) {
    e.preventDefault();

    /*
      invocation of the service and its method signinUser responsible 
      for sending the data to the server
    */
    this.authServ.signinUser(this.signinForm.value).subscribe(
      res => {
        /* */
        localStorage.removeItem(KeysLocalStorage.TOKEN_USER);

        /*
          invocation of the service and its saveDataUser method in charge 
          of storing the user's data in the localstorage
        */
        this.tokenServ.saveDataUser(res);

        /*
          redirected to 
        */
        this._router.navigateByUrl('/pages/home');
      },
      err => {
        /*
          error.status(400): error sent by server, this changes the status from 
          asyncValidation to true to finally show the error to the user
        */
        if (err.status === 400) {
          return this.asyncValidation = true;
        };
      }
    );
  };

}
