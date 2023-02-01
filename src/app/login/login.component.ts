import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  userLoginForm: FormGroup = new FormGroup({
    correo: new FormControl('kalmeav@uteq.edu.ec', [Validators.required, Validators.email]),
    contraseña: new FormControl('clave', [Validators.required, Validators.minLength(2) ]),
  })

  constructor(
    private userService: UserService
  ) 
  {}

  ngOnInit() {
    
  }

  onLoginUsuario(){
    console.log(this.userLoginForm.value);
    this.userService.login(this.userLoginForm.get('correo').value, this.userLoginForm.get('contraseña').value)
  }

}
