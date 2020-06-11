import { UserService } from "../services/service.index";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as swal from "sweetalert";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

declare function init_plugins();

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./login.component.css"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(public _userService: UserService, public router: Router) {}

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        termsAndConditions: new FormControl(false),
      },
      { validators: this.areEquals("password", "password2") }
    );

    this.form.setValue({
      name: "Test",
      email: "test1@mail.com",
      password: "123456",
      password2: "123456",
      termsAndConditions: true,
    });
  }

  register() {
    if (!this.form.valid) {
      return;
    }

    if (!this.form.value.termsAndConditions) {
      swal("Important!", "You have to accept the term and conditions", "error");
    }

    let user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );

    this._userService
      .createUser(user)
      .subscribe((data) => this.router.navigate(["/login"]));

    console.log("Valid form", this.form.valid);
    console.log(this.form.value);
  }

  areEquals(value1: string, value2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[value1].value;
      let pass2 = group.controls[value2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        areEquals: true,
      };
    };
  }
}
