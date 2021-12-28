import { Component, OnInit } from '@angular/core';

// import packages to implement @angular/forms
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

// import packages to implement @angular/router
import { Router } from '@angular/router';

// import authService and tokenService
import { AuthService } from "../../../../services/auth/auth.service";
import { TokenService } from '../../../../services/token/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  /*
    this variable stores the data entered by a user in the form
  */
  signupForm: FormGroup;

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
    these variables store regular expressions, implemented in sync validations
  */
  expRegName = /^[a-zA-Z ]{3,50}$/;
  expRegEmail = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
  expRegPass = /^(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\S{8,16}$/;

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
    this.signupForm = this._builder.group({
      name: ['user', [Validators.required, Validators.pattern(this.expRegName)]],
      email: ['user@gmail.com', [Validators.required, Validators.pattern(this.expRegEmail)]],
      password: ['User1010', [Validators.required, Validators.pattern(this.expRegPass)]],
    });
  };

  get errorName(): AbstractControl { /* error catcher for name field */
    return this.signupForm.controls['name'];
  };
  get errorEmail(): AbstractControl { /* error catcher for email field */
    return this.signupForm.controls['email'];
  };
  get errorPass(): AbstractControl { /* error catcher for password field */
    return this.signupForm.controls['password'];
  };

  /* 
    signup method defined in signupComponent, in charge of sending the 
    data entered in the form, also makes the calls to the service 
    to execute the methods in charge of the requests to the server
  */
  signup(e: Event) {
    e.preventDefault();

    /*
      invocation of the service and its method signupUser responsible 
      for sending the data to the server
    */
    this.authServ.signupUser(this.signupForm.value).subscribe(
      res => {
        /* 
          invocation of the service and its saveDataUser method in charge 
          of storing the user's data in the localstorage
        */
        this.tokenServ.saveTokenUser(res);

        /* 
          redirected to 
        */
        this._router.navigateByUrl('/auth/activate_account');
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
