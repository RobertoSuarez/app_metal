import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user/user.service';
import { finalize } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

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
    correo: new FormControl('angular3@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('facil2020', [Validators.required, Validators.minLength(2)]),
  })

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  async onLoginUsuario() {
    console.log(this.userLoginForm.value);

    // 
    const correo: string = this.userLoginForm.get('correo').value;
    const password: string = this.userLoginForm.get('password').value;

    Swal.fire({
      title: "Cargando...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

  
    this.userService.login(correo, password)
      .subscribe({
        complete: () => {
          console.log('completado');
        },
        next: (response) => {

          Swal.fire({
            title: "A iniciado",
            icon: "success",
            text: "El inicio de sesión se completo correctamente",
            timer: 1500,
          })

          this.userService.registerLocalStorage(response);

          if (response.user.rol === 'paciente') {
            this.router.navigate(['/perfil'])
          } else {
            this.router.navigate(['/doctor/dashboard'])
          }
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          //alert(error.message);
          this.err = true;
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: error.error.message
          });
        }
      });


  }

}
