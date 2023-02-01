import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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


  login( correo: string, password: string ) {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/users/login`, {
      correo: correo,
      password: password
    })
  }

  registrarUsuario(usuario: User) {
    console.log("Registrando usuario: ", usuario);

    usuario.nacimiento = new Date(usuario.nacimiento).toISOString();
    return this.http.post<User>(`${environment.apiUrl}/users/registrar`, usuario)
  }

}
