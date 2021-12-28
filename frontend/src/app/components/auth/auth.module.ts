import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialAuthModule } from './material-auth.module';

// auth routing 
import { AuthRoutingModule } from './auth-routing.module';

// import { ReactiveFormsModule } package
import { ReactiveFormsModule } from "@angular/forms";

// templates
import { BannerComponent } from './templates/banner/banner.component';
import { SpinnerComponent } from './templates/spinner/spinner.component';

// views
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { ActivateAccountComponent } from './views/activate-account/activate-account.component';

@NgModule({
  declarations: [
    BannerComponent,
    SpinnerComponent,
    SignupComponent,
    SigninComponent,
    ActivateAccountComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialAuthModule
  ]
})

export class AuthModule { }
