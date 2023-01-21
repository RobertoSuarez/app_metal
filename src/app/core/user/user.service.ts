import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { 

    console.log('UserService constructor');

    console.log(environment.apiUrl);
    this.http.post(`${environment.apiUrl}/users/login`, {
      correo: 'almea@gmail.com',
      password: '800'
    }).subscribe(data => {
      console.log(data);
    })
  }
}
