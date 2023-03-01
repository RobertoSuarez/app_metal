import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Modal1Component } from './modal1/modal1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavVerticalComponent,
    Modal1Component,
    SidebarComponent,
    PageTitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavVerticalComponent,
    SidebarComponent,
    PageTitleComponent,
  ]
})
export class SharedModule { }
