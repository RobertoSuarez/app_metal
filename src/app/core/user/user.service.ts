import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  nombre: string;
  
  constructor(
    private _http: HttpClient
  ) { }


}
