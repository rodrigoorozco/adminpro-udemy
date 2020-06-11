import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICES } from "../../config/config";
import { map } from "rxjs/operators";
import * as swal from "sweetalert";
import { Router } from "@angular/router";
import { UploadFileService } from "../uploadFile/upload-file.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public _uploadFileService: UploadFileService
  ) {
    this.loadStorage();
  }

  isLogged() {
    return this.token.length > 5 ? true : false;
  }

  loadStorage() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user"));
    } else {
      this.token = "";
      this.user = null;
    }
  }

  saveStorage(id: string, token: string, user: User) {
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  googleSignIn(token) {
    let url = URL_SERVICES + "/login/google";
    return this.http.post(url, { token }).pipe(
      map((resp: any) => {
        this.saveStorage(resp.id, resp.token, resp.data);
        return true;
      })
    );
  }

  logout() {
    this.user = null;
    this.token = "";

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    this.router.navigate(["/login"]);
  }

  login(user: User, rememberMe: boolean = false) {
    if (rememberMe) {
      localStorage.setItem("email", user.email);
    } else {
      localStorage.removeItem("email");
    }

    return this.http.post(URL_SERVICES + "/login", user).pipe(
      map((resp: any) => {
        this.saveStorage(resp.id, resp.token, resp.data);

        return true;
      })
    );
  }

  createUser(user: User) {
    let url = URL_SERVICES + "/user";
    return this.http.post(url, user).pipe(
      map((resp: any) => {
        swal("Usuario creado", user.email, "success");
        return resp.user;
      })
    );
  }

  updateUser(user: User) {
    let url = URL_SERVICES + "/user/" + user._id;
    url += "?token=" + this.token;
    return this.http.put(url, user).pipe(
      map((resp: any) => {
        this.saveStorage(resp.data.id, this.token, resp.data);
        swal("Usuario actualizado", user.name, "success");
        return true;
      })
    );
  }

  changeImage(file: File, id: string) {
    this._uploadFileService
      .uploadFile(file, "user", id)
      .then((resp: any) => {
        this.user.img = resp.data.img;
        swal("Imagen cambiada",  resp.data.name, "success");
        this.saveStorage(id, this.token, resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
