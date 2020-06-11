import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/service.index";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(public _userService: UserService) {
    this.user = _userService.user;
  }

  ngOnInit() {}
}
