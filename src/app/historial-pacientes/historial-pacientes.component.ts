import { Component, OnInit } from '@angular/core';
import { User } from '../core/user/user.types';
import { CitasService } from '../core/cita/citas.service';
import { Cita } from '../core/cita/citas.types';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);


@Component({
  selector: 'app-historial-pacientes',
  templateUrl: './historial-pacientes.component.html',
  styleUrls: ['./historial-pacientes.component.css']
})
export class HistorialPacientesComponent implements OnInit {
  err: boolean= false;
  citasPresentar: Cita[];
  user: User = JSON.parse(localStorage.getItem('user')) as User;
  //para mostrar todas las citas de ese paciente
  
  constructor(
    private citasService: CitasService
  ) {}

  ngOnInit(): void {
    this.citasService.mostarCitas(this.user.cedula)
    .subscribe({
      complete: () => { 
        console.log('completado'); 
      },
      next: (response) => {
        this.citasPresentar= response;
        console.log(response);
    /*    for(let i = 0 ; i < this.citasPresentar.length ; i++){
          console.log(this.citasPresentar[i].paciente);
      }*/
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        //alert(error.message);
        this.err = true;
      }
    });
  }

}
