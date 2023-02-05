import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-pacientes',
  templateUrl: './historial-pacientes.component.html',
  styleUrls: ['./historial-pacientes.component.css']
})
export class HistorialPacientesComponent implements OnInit {
  datos: string[]= ["María", "San Camilo", "0982842953"];
  constructor() { }

  ngOnInit(): void {
  }

}
