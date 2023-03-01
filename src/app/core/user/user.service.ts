import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { toUnicode } from 'punycode';
import { environment } from 'src/environments/environment';
import { User, LoginResponse } from './user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {

    console.log('UserService constructor');

    console.log(environment.apiUrl);
  }


  login(correo: string, password: string) {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/users/login`, {
      correo: correo,
      password: password
    })
  }

  cerrarSesion() {
    localStorage.clear();
  }

  registrarUsuario(usuario: User) {
    console.log("Registrando usuario: ", usuario);

    usuario.nacimiento = new Date(usuario.nacimiento).toISOString();
    return this.http.post<User>(`${environment.apiUrl}/users/registrar`, usuario)
  }

  // obtener usuario con rol paciente y doctor
  ObtenerUsuario(rol: string, termino: string, limite: number = 10) {
    console.log("Obtener usuario Rol: ", rol);
    let params = new HttpParams();
    params = params.append('rol', rol);
    params = params.append('termino', termino);
    params = params.append('limite', limite);
    console.log(params);

    return this.http.get<User[]>(`${environment.apiUrl}/users`, { params })
  }

  registerLocalStorage(response: LoginResponse): void {
    console.log(response);
    const { token, user } = response;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));
  }

  get usuarioLocal(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

}
