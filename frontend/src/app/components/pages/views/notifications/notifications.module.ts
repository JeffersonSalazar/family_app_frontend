import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import views components
import { NotificationsComponent } from './notifications.component';


@NgModule({
  declarations: [
    NotificationsComponent,
  ],

  imports: [
    CommonModule
  ]
})

export class NotificationsModule { }
