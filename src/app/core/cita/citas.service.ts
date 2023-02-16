import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cita} from './citas.types';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(
    private http: HttpClient
  ) { }

  mostarCitas(cedula:string){
    return this.http.get<Cita[]>(`${environment.apiUrl}/citas`)
  }

  registraCita(cita: Cita) {
    cita.fecha = new Date(cita.fecha).toISOString();
    return this.http.post<Cita>(`${environment.apiUrl}/citas`, cita)
  }
}
