import { User } from "../user/user.types";

export class Cita {
    id?:                  string;
    paciente?:            User;
    doctor?:              User;
    descripcion?:         string;
    fecha?:               Date | string;
    estado?:              string;
    recordatorios?: Number;
    detalles_embarazada?: DetallesEmbarazada;
    detalles_feto?:       DetallesFeto;

    constructor() {
        this.paciente = new User();
        this.doctor = new User();
        this.descripcion = "";
        this.fecha = new Date();
        this.estado = "Por atender";
        this.recordatorios = 0;
    }
}

export class DetallesEmbarazada {
    peso:   string;
    altura: string;
}

export class DetallesFeto {
    fotos:  string[];
    tamaño: string;
}