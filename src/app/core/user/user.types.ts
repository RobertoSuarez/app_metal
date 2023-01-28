export interface User {
    id:         string;
    nombres:    string;
    apellidos:  string;
    cedula:     string;
    correo:     string;
    password:   string;
    genero:     string;
    nacimiento: Date | string;
}
