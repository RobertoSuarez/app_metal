import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CitasService } from '../core/cita/citas.service';
import { Cita } from '../core/cita/citas.types';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user.types';


@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.component.html',
  styleUrls: ['./nueva-cita.component.css'],
})
export class NuevaCitaComponent implements OnInit {

  

  cita: Cita = new Cita();
  minFecha: string;
  
  queryPaciente: string = "";
  queryDoctor: string = "";

  pacientesFiltrado: User[] = [];
  doctoresFiltrado: User[] = [];

  estadoPaciente: boolean = false;
  estadoDoctor: boolean = false;
  
  constructor(
    private userService: UserService,
    private citasService: CitasService
  ) { 

    this.minFecha = new Date().toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    
    console.log(this.queryPaciente, this.queryDoctor);

    this.userService.ObtenerUsuario("paciente", "").subscribe(res => {
      console.log(res);
      this.pacientesFiltrado = res;
    });

    // this.userService.ObtenerUsuario("doctor", "").subscribe(res => {
    //   console.log(res);
    //   this.doctoresFiltrado = res;
    // });

    console.log(this.userService.usuarioLocal.id, this.userService.usuarioLocal.nombres);
    this.cita.doctor = this.userService.usuarioLocal;
  }

  

  filtroPaciente(): void {
    this.estadoPaciente = true;
    this.userService.ObtenerUsuario("paciente", this.queryPaciente, 10)
      .subscribe(usuarios => {
        this.pacientesFiltrado = usuarios;
        this.estadoPaciente = false;
      });
  }

  filtroDoctor(): void {
    this.estadoDoctor = true;
    this.userService.ObtenerUsuario("doctor", this.queryDoctor, 10)
      .subscribe(usuarios => {
        this.doctoresFiltrado = usuarios;
        this.estadoDoctor = false;
      });
  }

  get habilitar(): boolean {
    console.log(this.cita.fecha)
    const today = new Date();
    const fechaCita = new Date(this.cita.fecha);

    if (
      this.cita.paciente.id.length > 0 && 
      this.cita.doctor.id.length > 0 &&
      this.cita.descripcion.length > 0 &&
      fechaCita.getTime() > today.getTime()
      ) {
      return true;
    }

    return false
  }

  registrarCita(): void { 

    console.log('registrarCita');
    console.log("cita a registrar: ", this.cita);

    Swal.fire({
      title: "Registrando cita",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.citasService.registraCita(this.cita)
      .subscribe(res => {
        
        Swal.fire({
          title: "Registro de cita",
          icon: "success",
          text: "Se a registrado con extio: " + res.id,
        })

        console.log("Cita registrada: ", res);
        this.cita = new Cita();
      })
  }
  

}
