import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./layout/user/user.component";
import { AdminComponent } from "./layout/admin/admin.component";

const routes: Routes = [
  
  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "",
    component: UserComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "perfil", component: ProfileComponent },
      { path: "landing", component: LandingComponent },
    ],
  },

  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "registrar", component: SignupComponent },
    ]
  },
  
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
