import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import main component
import { PagesComponent } from './pages.component';

// import components
import { HomeComponent } from './views/home/home.component';
import { MembersComponent } from './views/members/members.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { VideosComponent } from './views/videos/videos.component';

const routes: Routes = [
  { // main path
    path: '', component: PagesComponent, children: [
      // path components
      { path: 'home', component: HomeComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'members', component: MembersComponent },
      { path: 'notifications', component: NotificationsComponent },

      // redirect component
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
