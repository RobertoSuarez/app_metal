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

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {}

    cerrar() {
        this.userService.cerrarSesion();
        this.router.navigate(['/login']);
    }

    get usuario(): User {
        return this.userService.usuarioLocal;
    }

}
