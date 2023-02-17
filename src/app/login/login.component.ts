import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user/user.service';
import { finalize } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  err: boolean = false;

  userLoginForm: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onLoginUsuario() {
    console.log(this.userLoginForm.value);

    // 
    const correo: string = this.userLoginForm.get('correo').value;
    const password: string = this.userLoginForm.get('contraseña').value;

    this.userService.login(correo, password)
      .subscribe({
        complete: () => {
          console.log('completado');
        },
        next: (response) => {

          this.userService.registerLocalStorage(response);

          if (response.user.rol === 'paciente') {
            this.router.navigate(['/perfil'])
          } else {
            this.router.navigate(['/admin/dashboard'])
          }
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          //alert(error.message);
          this.err = true;
        }
      });


  }

}
