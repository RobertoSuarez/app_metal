export interface User {
    id?:         string;
    nombres?:    string;
    apellidos?:  string;
    cedula?:     string;
    correo?:     string;
    password?:   string;
    genero?:     string;
    nacimiento?: string | Date;
    celular?:    string;
    rol?:        string;
}


export interface LoginResponse {
    user: User;
    token: string;
}