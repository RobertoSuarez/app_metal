import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registro } from './signup.types';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;

    generos: string[] = ['Masculino', 'Femenino', 'otros']

    userForm: FormGroup = new FormGroup({
        nombres: new FormControl('Roberto Carlos', [Validators.required, Validators.minLength(6)]),
        apellidos: new FormControl('Suárez Litardo', [Validators.required, Validators.minLength(6)]),
        nacimiento: new FormControl('', [Validators.required]),
        genero: new FormControl(null, [Validators.required]),
        correo: new FormControl('electrosonix12@gmail.com', [Validators.required, Validators.email]),
        contraseña: new FormControl('facil2020', [Validators.required, Validators.minLength(6) ]),
        confirContraseña: new FormControl('facil2020', [Validators.required]),
        politica: new FormControl(true, Validators.requiredTrue),
    })

    constructor() { }

    ngOnInit() {

        this.userForm.controls['genero'].setValue('Masculino', { onlySelf: true })
    }

    onRegistrarUsuario() {
        console.log(this.userForm.value);
        
    }
}
