import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";
import * as swal from "sweetalert";
import { ModalUploadService } from "../../components/modal-upload/modal-upload.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: [],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  from: number = 0;
  total: number = 0;
  loading: boolean = true;

  constructor(
    public _userService: UserService,
    public _modalUploadService: ModalUploadService
  ) {}

  ngOnInit() {
    this.getUsers();
    this._modalUploadService.notification.subscribe((resp) => {
      this.getUsers();
    });
  }

  getUsers() {
    this.loading = true;
    this._userService.getUsers(this.from).subscribe((resp: any) => {
      //console.log(resp);
      this.total = resp.count;
      this.users = resp.data;
      this.loading = false;
    });
  }

  changeFrom(value: number) {
    let from = this.from + value;
    if (from >= this.total) {
      return;
    }

    if (from < 0) {
      return;
    }

    this.from += value;
    this.getUsers();
  }

  searchuser(valueParam: string) {
    if (valueParam.length <= 0) {
      this.getUsers();
    }

    this.loading = true;
    this._userService.searchUsers(valueParam).subscribe((resp: User[]) => {
      this.users = resp;
      this.loading = false;
    });
  }

  deleteUser(user: User) {
    if (user._id === this._userService.user._id) {
      swal("No puede borrar usuario", "No se puede borrar a si mismo", "error");
    }

    swal({
      title: "Are you sure?",
      text: `Do you want to delete ${user.name}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((data) => {
      if (data) {
        this._userService.deleteUser(user._id).subscribe((resp) => {
          this.getUsers();
        });
      }
    });
  }

  saveUser(user: User) {
    this._userService.updateUser(user).subscribe();
  }

  showModal(user: User) {
    this._modalUploadService.showModal("user", user._id);
  }
}
