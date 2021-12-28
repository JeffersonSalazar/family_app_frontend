import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//
import { MaterialModule } from './material.module';

//
import { ReactiveFormsModule } from "@angular/forms";

// pages routing 
import { PagesRoutingModule } from './pages-routing.module';

// import main component
import { PagesComponent } from './pages.component';

// import templates components
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';

// import modules of the components
import { HomeModule } from './views/home/home.module';
import { VideosModule } from './views/videos/videos.module';
import { MembersModule } from './views/members/members.module';
import { NotificationsModule } from './views/notifications/notifications.module';

//
import { ChangePassComponent } from './views/change-pass/change-pass.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    ChangePassComponent
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,

    HomeModule,
    VideosModule,
    MembersModule,
    NotificationsModule,
  ]
})

export class PagesModule { }
