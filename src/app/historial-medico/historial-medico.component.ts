import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasService } from '../core/cita/citas.service';
import { HttpErrorResponse } from "@angular/common/http";
import { Cita } from '../core/cita/citas.types';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {
  err: boolean= false;
  citasPresentar: Cita[];
  citaForm: FormGroup = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.minLength(10)]),
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

}
