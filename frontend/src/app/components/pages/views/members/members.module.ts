import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import views components
import { MembersComponent } from './members.component';


@NgModule({
  declarations: [
    MembersComponent,
  ],

  imports: [
    CommonModule
  ]
})

export class MembersModule { }
