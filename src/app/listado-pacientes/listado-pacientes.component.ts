import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from '../core/cita/citas.service';
import { Cita } from '../core/cita/citas.types';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user.types';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent implements OnInit {

  citas: Cita[] = [];
  user: User;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private citasService: CitasService,
  ) { 

    this.user = this.userService.usuarioLocal;
  }

  ngOnInit(): void {
    this.citasService.obtenerCitasPorDoctor(this.user.id)
      .subscribe(data => {
        console.log(data);
        this.citas = data;
      })
  }

  

  nuevaCita(): void {
    console.log('Nueva cita');
    this.router.navigate(['/admin/nueva-cita']);
  }

  get fullNombre(): string {
    console.log(this.userService.usuarioLocal)
    return `${this.userService.usuarioLocal.nombres} ${this.userService.usuarioLocal.apellidos}`
  }
}
