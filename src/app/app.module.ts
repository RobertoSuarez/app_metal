import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ProximaCitaComponent } from './proxima-cita/proxima-cita.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { HistorialPacientesComponent } from './historial-pacientes/historial-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    ProximaCitaComponent,
    ListadoPacientesComponent,
    HistorialMedicoComponent,
    DashboardComponent,
    ConfiguracionesComponent,
    AyudaComponent,
    HistorialPacientesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
