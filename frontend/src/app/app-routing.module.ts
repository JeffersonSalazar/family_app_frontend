import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import guardian
import { LoadGuard } from './guards/load-guard/load.guard';

const routes: Routes = [
  // path modules
  { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },

  {
    path: 'pages',
    canLoad: [LoadGuard],
    loadChildren: './components/pages/pages.module#PagesModule'
  },

  // redirect module
  { path: '**', pathMatch: 'full', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
