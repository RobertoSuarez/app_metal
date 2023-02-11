import { User } from "../user/user.types";

export interface Cita {
    id:                  string;
    paciente:            User;
    doctor:              User;
    descripcion:         string;
    fecha:               string;
    estado:              string;
    detalles_embarazada: DetallesEmbarazada;
    detalles_feto:       DetallesFeto;
}

export interface DetallesEmbarazada {
    peso:   string;
    altura: string;
}

export interface DetallesFeto {
    fotos:  string[];
    tamaño: string;
}