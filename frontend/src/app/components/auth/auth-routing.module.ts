import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanGuard } from 'src/app/guards/can-guard/can.guard';

// import components
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { ActivateAccountComponent } from './views/activate-account/activate-account.component';

const routes: Routes = [
  // path components
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'activate_account',
    canActivate: [CanGuard],
    component: ActivateAccountComponent
  },

  // redirect component
  { path: '**', pathMatch: 'full', redirectTo: 'signup' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
