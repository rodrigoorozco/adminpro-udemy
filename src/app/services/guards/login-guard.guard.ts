import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuardGuard implements CanActivate {
  constructor(private _userService: UserService, public router: Router) {}

  canActivate(): boolean {
    if (this._userService.isLogged()) {
      //console.log("Paso el Guard");
      return true;
    } else {
      //console.log("Bloqueado por el Guard");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
