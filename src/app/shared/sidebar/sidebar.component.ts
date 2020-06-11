import { Component, OnInit } from "@angular/core";
import { SidebarService } from "../../services/service.index";
import { UserService } from "../../services/user/user.service";
import { User } from '../../models/user.model';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: [],
})
export class SidebarComponent implements OnInit {
  user:User;
  constructor(
    public _sidebarService: SidebarService,
    public _userService: UserService
  ) {}

  ngOnInit() {
    this.user  = this._userService.user;
  }
}
