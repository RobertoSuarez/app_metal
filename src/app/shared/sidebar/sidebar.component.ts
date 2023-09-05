import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { Ruta } from './rutas.types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opcionesPrincipales: Ruta[] = [
    {
      display: 'Resumen del día',
      path: '/doctor/dashboard',
      icon: 'fas fa-tachometer-alt',
    }, 
    {
      display: 'Historial medico',
      path: '/doctor/historial-medico',
      icon: 'fas fa-file-medical-alt'
    }, 
    {
      display: 'Pacientes por atender',
      path: '/doctor/pacientes-por-atender',
      icon: 'fas fa-user-md',
    },
    {
      display: 'Registrar usuario',
      path: '/doctor/registrar-usuario',
      icon: 'fas fa-user-plus',
    }
  ];

  name: String = '';
  photoURL: String = '/assets/img/theme/team-1-800x800.jpg';

  constructor(
    private userService: UserService,
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
    console.log(this.userService.usuarioLocal);
    this.name = this.userService.usuarioLocal.nombres;
    if (this.userService.usuarioLocal.photoURL.length > 1) {
      this.photoURL = this.userService.usuarioLocal.photoURL;
    }
  }

  cerrarSesion() {
    this.userService.cerrarSesion();
    //this.router.navigate(['/login']);
  }
}
