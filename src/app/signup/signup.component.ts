import { HttpErrorResponse } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../core/user/user.service";
import { User } from "../core/user/user.types";
import { Registro } from "./signup.types";
import { Modal1Component } from "../shared/modal1/modal1.component";
import { finalize } from "rxjs";
import Swal from "sweetalert2";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  focus2;

  error: string = '';

  generos: string[] = ["Masculino", "Femenino", "otros"];
  roles: string[] = ['doctor', 'paciente'];

  userForm: FormGroup = new FormGroup({
    nombres: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    apellidos: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    cedula: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    celular: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    correo: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    genero: new FormControl(null, [Validators.required]),
    nacimiento: new FormControl("", [Validators.required]),
    rol: new FormControl("", [Validators.required]),

    confirPassword: new FormControl("", [Validators.required]),
    politica: new FormControl(true, Validators.requiredTrue),
  });


  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.userForm.controls["genero"].setValue("Masculino", { onlySelf: true });
  }

  onRegistrarUsuario() {

    Swal.fire({
      title: "Registrando Usuario",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    console.log(this.userForm.value);
    this.userForm.disable();

    const password: string = this.userForm.get("password").value;
    const confirPassword: string = this.userForm.get("confirPassword").value;
    if (password !== confirPassword) {
      alert("Las contraseña no coinsiden");
      this.userForm.enable();
      return;
    }

    this._userService.registrarUsuario(this.userForm.value as User)
    .pipe(finalize(() => this.userForm.enable()))
    .subscribe({
      next: (user) => {
        Swal.fire({
          title: "Registro de usuario",
          icon: "success",
          text: `El registro del usuario ${user.nombres} se completado correctamente.`,
          timer: 2500,
        })
        console.log(user);
        //alert(`Usuario registrado: ${user.nombres} - ${user.id}`);
        this.userForm.reset();
        //this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        Swal.fire({
          title: "Registro de usuario",
          icon: "error",
          text: err.error,
          timer: 2500,
        })
        console.log("Error", err.error);
        //alert(err.error);
      }
    });
  }

  openModal() {
    
  }
}
