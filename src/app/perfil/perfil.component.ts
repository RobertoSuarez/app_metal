import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user.types';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User = new User()
  newUser: User = new User();
  edicion: boolean = false
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.usuarioLocal
    this.newUser = {...this.user};
  }

  submitForm() {
    console.log(this.user);
  }

  
}
