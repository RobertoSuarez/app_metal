import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../core/user/user.types";

@Injectable({
  providedIn: "root",
})
export class PacienteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = JSON.parse(localStorage.getItem("user")) as User;

    // si el dato no esta en localStorage
    if (!user) {
      this.router.navigate(["/login"]);
    }

    if (user.rol === "paciente") {
      return true;
    }

    if (user.rol === "doctor") {
      this.router.navigate(["/doctor"]);
    }
  }
}
