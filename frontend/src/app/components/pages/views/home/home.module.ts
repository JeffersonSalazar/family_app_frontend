import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import views components
import { HomeComponent } from './home.component';

//
import { MaterialHomeModule } from './material-home.module';

//
import { PostsComponent } from './posts/posts.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    NewsComponent
  ],

  imports: [
    CommonModule,
    MaterialHomeModule
  ]
})

export class HomeModule { }
