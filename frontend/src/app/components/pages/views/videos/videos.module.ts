import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import views components
import { VideosComponent } from './videos.component';


@NgModule({
  declarations: [
    VideosComponent,
  ],

  imports: [
    CommonModule
  ]
})

export class VideosModule { }
