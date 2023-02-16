import { Component, OnInit } from '@angular/core';
import { Ruta } from './rutas.types';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  opcionesPrincipales: Ruta[] = [
    {
      display: 'Dashboard',
      path: '/admin/dashboard',
      icon: 'fa-solid fa-gauge',
    }, 
    {
      display: 'Historial medico',
      path: '/admin/historial-medico',
      icon: 'fa-solid fa-laptop-medical'
    }, 
    {
      display: 'Pacientes por atender',
      path: '/admin/pacientes-por-atender',
      icon: 'fa-solid fa-hospital-user',
    },
    {
      display: 'Registrar usuario',
      path: '/admin/registrar-usuario',
      icon: 'fa-solid fa-address-card',
    }
  ];

  opcionesInferiores: Ruta[] = [
    {
      display: 'Configuraciones',
      path: '/admin/configuracion',
      icon: 'fa-solid fa-gear'
    },
    {
      display: 'Ayuda',
      path: '/admin/ayuda',
      icon: 'fa-solid fa-info'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
