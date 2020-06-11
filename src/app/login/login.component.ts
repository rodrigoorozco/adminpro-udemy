import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/service.index";
import { User } from "../models/user.model";

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  rememberMe: boolean = false;
  email: string;
  auth2: any;

  constructor(public router: Router, public _userService: UserService) {}

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem("email") || "";
    if (this.email.length > 0) {
      this.rememberMe = true;
    }
  }

  googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "219347723222-domvvfvsu8uk4falkqi3ki8i4vmn4d0p.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        scope: "profile email",
      });

      this.attachSignin(document.getElementById("btnGoogle"));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      let profile = googleUser.getBasicProfile();
      //console.log(profile);
      let token = googleUser.getAuthResponse().id_token;
      //console.log(token);
      this._userService.googleSignIn(token).subscribe((data) => {
        window.location.href = '#/dashboard';
      });
    });
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let user = new User(null, form.value.email, form.value.password);

    this._userService
      .login(user, form.value.rememberMe)
      .subscribe((success) => {
        this.router.navigate(["/dashboard"]);
      });
  }
}
