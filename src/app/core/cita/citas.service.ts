import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { Cita} from './citas.types';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  mostarCitas(cedula:string) {
    let params = new HttpParams();
    params = params.append('cedula', cedula);
    console.log(params);
    return this.http.get<Cita[]>(`${environment.apiUrl}/citas`, {params})
  }

  registraCita(cita: Cita) {
    cita.fecha = new Date(cita.fecha).toISOString();
    return this.http.post<Cita>(`${environment.apiUrl}/citas`, cita)
  }

  obtenerCitasPorDoctor(idDoctor: string) {

    let params = new HttpParams();
    params = params.append('id-doctor', idDoctor);
    return this.http.get<Cita[]>(`${environment.apiUrl}/citas`, { params })
  }

  recordarCita(idCita: string) {
    return this.http.put<Cita>(`${environment.apiUrl}/citas/${idCita}/recordatorio`, {});
  }

  // Obtener las proximas citas del usuario autenticado
  proximasCitas() : Observable<Cita[]> {
    const idUsuario = this.userService.usuarioLocal.id;
    return this.http.get<Cita[]>(`${environment.apiUrl}/citas/proximas-citas/${idUsuario}`)
  }
}
