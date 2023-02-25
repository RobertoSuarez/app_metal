import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasService } from '../core/cita/citas.service';
import { HttpErrorResponse } from "@angular/common/http";
import { Cita } from '../core/cita/citas.types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {
  
  err: boolean= false;

  citasPresentar: Cita[];

  citaForm: FormGroup = new FormGroup({
    cedula: new FormControl('1206773572', [Validators.required, Validators.minLength(10)]),
  })

  constructor(
    private citasService: CitasService
  ) { }

  ngOnInit(): void {
  }

  onCita(){
    console.log('En cita');
    const cedula: string = this.citaForm.get('cedula').value;
    this.citasService.mostarCitas(cedula)
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

  mostrarCita(cita: Cita) {
    Swal.fire({
      title: 'Información de la cita médica',
      html: `
        <div class="border border-primary text-left p-2">
          <div>
            ID: ${cita.id}
          </div>
          <div>
            Paciente: ${cita.paciente.nombres} ${cita.paciente.apellidos}
          </div>
          <div>
            Cédula: ${cita.paciente.cedula}
          </div>
          <div>
            Correo: ${cita.paciente.correo}
          </div>
          <div>
            Doctor: ${cita.doctor.nombres} ${cita.doctor.apellidos}
          </div>
          <div>
            Fecha: ${cita.fecha}
          </div>
          <div>
            Descripción: ${cita.descripcion}
          </div>
          
        </div>
      `,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: "Aceptar"
    })
  }

}
