import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
