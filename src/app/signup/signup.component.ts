import { HttpErrorResponse } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../core/user/user.service";
import { User } from "../core/user/user.types";
import { Registro } from "./signup.types";
import { Modal1Component } from "../shared/modal1/modal1.component";
import { finalize } from "rxjs";

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

  userForm: FormGroup = new FormGroup({
    nombres: new FormControl("Roberto Carlos", [
      Validators.required,
      Validators.minLength(6),
    ]),
    apellidos: new FormControl("Suárez Litardo", [
      Validators.required,
      Validators.minLength(6),
    ]),
    cedula: new FormControl("1206773572", [
      Validators.required,
      Validators.minLength(10),
    ]),
    correo: new FormControl("electrosonix12@gmail.com", [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("facil2020", [
      Validators.required,
      Validators.minLength(6),
    ]),
    genero: new FormControl(null, [Validators.required]),
    nacimiento: new FormControl("", [Validators.required]),

    confirContraseña: new FormControl("facil2020", [Validators.required]),
    politica: new FormControl(true, Validators.requiredTrue),
  });


  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.userForm.controls["genero"].setValue("Masculino", { onlySelf: true });
  }

  onRegistrarUsuario() {
    console.log(this.userForm.value);
    this.userForm.disable();

    const password: string = this.userForm.get("password").value;
    const confirPassword: string = this.userForm.get("confirContraseña").value;
    if (password !== confirPassword) {
      alert("Las contraseña no coinsiden");
      this.userForm.enable();
      return;
    }

    this._userService.registrarUsuario(this.userForm.value as User)
    .pipe(finalize(() => this.userForm.enable()))
    .subscribe({
      next: (user) => {
        console.log(user);
        alert(`Usuario registrado: ${user.nombres} - ${user.id}`);
        this.userForm.reset();
        //this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        console.log("Error", err.error);
        alert(err.error);
      }
    });
  }

  openModal() {
    
  }
}
