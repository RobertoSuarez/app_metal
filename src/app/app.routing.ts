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
import { ProximaCitaComponent } from "./proxima-cita/proxima-cita.component";
import { ListadoPacientesComponent } from "./listado-pacientes/listado-pacientes.component";
import { HistorialMedicoComponent } from "./historial-medico/historial-medico.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ConfiguracionesComponent } from "./configuraciones/configuraciones.component";
import { AyudaComponent } from "./ayuda/ayuda.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HistorialPacientesComponent } from "./historial-pacientes/historial-pacientes.component";

const routes: Routes = [
  
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },


  {
    path: "",
    component: UserComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "perfil", component: ProfileComponent },
      { path: 'proximas-citas', component: ProximaCitaComponent },
      { path: "landing", component: LandingComponent },
      { path: "historial-paciente", component: HistorialPacientesComponent },
    ],
  },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "registrar-usuario", component: SignupComponent },
      { path: "pacientes-por-atender", component: ListadoPacientesComponent },
      { path: "historial-medico", component: HistorialMedicoComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "configuracion", component: ConfiguracionesComponent },
      { path: "ayuda", component: AyudaComponent },
    ]
  },
  
  { path: '**', component: PageNotFoundComponent }
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
