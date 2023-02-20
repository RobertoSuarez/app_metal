import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistorialPacientesComponent } from './historial-pacientes/historial-pacientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContendioDeInteresComponent } from './contendio-de-interes/contendio-de-interes.component';
import { NuevaCitaComponent } from './nueva-cita/nueva-cita.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from './shared/shared.module';

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
    PageNotFoundComponent,
    HistorialPacientesComponent,
    InicioComponent,
    ContendioDeInteresComponent,
    NuevaCitaComponent,
    PerfilComponent,
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
    SweetAlert2Module.forRoot(),
    SharedModule
    
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
