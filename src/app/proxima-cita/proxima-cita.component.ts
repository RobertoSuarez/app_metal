import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proxima-cita',
  templateUrl: './proxima-cita.component.html',
  styleUrls: ['./proxima-cita.component.css']
})
export class ProximaCitaComponent implements OnInit {
  citas: string[]= ["cita1", "Cita 2"];

  constructor() { }

  ngOnInit(): void {
  }

}
