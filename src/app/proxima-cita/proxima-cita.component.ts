import { Component, OnInit } from '@angular/core';
import { CitasService } from '../core/cita/citas.service';
import { Cita } from '../core/cita/citas.types';

@Component({
  selector: 'app-proxima-cita',
  templateUrl: './proxima-cita.component.html',
  styleUrls: ['./proxima-cita.component.css']
})
export class ProximaCitaComponent implements OnInit {
  citas: Cita[]= [];

  constructor(
    private citaService: CitasService
  ) { }

  ngOnInit(): void {
    this.citaService.proximasCitas()
      .subscribe(data => {
        this.citas = data;
      })
  }

}
