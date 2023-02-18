import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          toast: true,
          text: 'Se obtubieron los datos correctamente',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  

  nuevaCita(): void {
    console.log('Nueva cita');
    this.router.navigate(['/admin/nueva-cita']);
  }

  recordar(idCita: string): void {
    
    this.citasService.recordarCita(idCita)
    .subscribe({
      next: (value) => {
        console.log(value);
        const index = this.citas.findIndex(obj => obj.id === value.id);
        if (index !== -1) {
          this.citas[index] = value;
          Swal.fire({
            text: 'Se envio el correo correctamente',
            icon: 'success',
            timer: 1500,
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  get fullNombre(): string {
    return `${this.userService.usuarioLocal.nombres} ${this.userService.usuarioLocal.apellidos}`
  }
}
