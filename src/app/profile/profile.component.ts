import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user.types';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    photoURL: string = "";
    usuario: User;
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.usuario = this.userService.usuarioLocal;
    }

    cerrar() {
        this.userService.cerrarSesion();
        this.router.navigate(['/login']);
    }

}
