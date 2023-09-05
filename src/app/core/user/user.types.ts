export class User {
    id?:         string = "";
    nombres?:    string = "";
    apellidos?:  string = "";
    cedula?:     string = "";
    correo?:     string = "";
    password?:   string = "";
    genero?:     string = "";
    nacimiento?: string | Date;
    celular?:    string = "";
    rol?:        string = "";
    photoURL?: string = "";

    constructor() {
        this.id = "";
    }
}


export interface LoginResponse {
    user: User;
    token: string;
}