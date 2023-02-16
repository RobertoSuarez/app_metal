import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
    let params = new HttpParams();
    params = params.append('cedula', cedula);
    console.log(params);
    return this.http.get<Cita[]>(`${environment.apiUrl}/citas`, {params})
  }

  registraCita(cita: Cita) {
    return this.http.post<Cita>(`${environment.apiUrl}/citas`, cita)
  }
}
