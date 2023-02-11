import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Cita } from '../core/cita/citas.types';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user.types';

@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.component.html',
  styleUrls: ['./nueva-cita.component.css'],
})
export class NuevaCitaComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  cita: Cita
  terminoQuery: string;

  pacientes: User[]
  doctores: User[]

  pacientesFiltrado: User[] = [];

  pacienteSelecionado: User;

  ngOnInit(): void {
    this.userService.ObtenerUsuario("paciente", "").subscribe(res => {
      console.log(res);
      this.pacientes = res;
      this.pacientesFiltrado = this.pacientes;
    });

    this.userService.ObtenerUsuario("doctor", "").subscribe(res => {
      console.log(res);
      this.doctores = res;
    });
  }

  registrarCita(): void { 
    console.log('registrarCita');
    console.log(this.pacienteSelecionado)
  }

  filtroPaciente(): void {
    if (this.terminoQuery.length < 3) {
      return
    }

    this.userService.ObtenerUsuario("paciente", this.terminoQuery, 10)
      .subscribe(usuarios => {
        this.pacientesFiltrado = usuarios;
      });
  }

}
