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
import { InicioComponent } from "./inicio/inicio.component";
import { ContendioDeInteresComponent } from "./contendio-de-interes/contendio-de-interes.component";
import { NuevaCitaComponent } from "./nueva-cita/nueva-cita.component";
import { AuthTokenGuard } from "./guards/auth-token.guard";
import { DoctorGuard } from "./guards/doctor.guard";
import { PacienteGuard } from "./guards/paciente.guard";
import { PerfilComponent } from "./perfil/perfil.component";
import { AtenderComponent } from "./atender/atender.component";
import { CambiarPasswordComponent } from "./cambiar-password/cambiar-password.component";

const routes: Routes = [
  
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },

  {
    path: "",
    component: UserComponent,
    canActivate: [AuthTokenGuard, PacienteGuard],
    children: [
      
      { path: "inicio", component: InicioComponent },
      { path: "perfil", component: ProfileComponent },
      { path: 'proximas-citas', component: ProximaCitaComponent },
      { path: "contenido-de-interes", component: ContendioDeInteresComponent },
      { path: "landing", component: LandingComponent },
      { path: "historial-paciente", component: HistorialPacientesComponent },
    ],
  },

  {
    path: "doctor",
    component: AdminComponent,
    canActivate: [AuthTokenGuard, DoctorGuard],
    children: [
      { path: "registrar-usuario", component: SignupComponent },
      { path: "pacientes-por-atender", component: ListadoPacientesComponent },
      { path: "historial-medico", component: HistorialMedicoComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "configuracion", component: ConfiguracionesComponent },
      { path: "perfil", component: PerfilComponent },
      { path: "atender/:id-cita", component: AtenderComponent },
      { path: "ayuda", component: AyudaComponent },
      { path: "nueva-cita", component: NuevaCitaComponent },
      { path: "cambiar-password", component: CambiarPasswordComponent },
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
