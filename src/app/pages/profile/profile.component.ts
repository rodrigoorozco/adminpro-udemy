import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: [],
})
export class ProfileComponent implements OnInit {
  user: User;
  imageToUpload: File;
  imageTemp: string;

  constructor(private _userSer: UserService) {
    this.user = _userSer.user;
  }

  ngOnInit() {}

  save(user: User) {
    this.user.name = user.name;

    if (!this.user.google) {
      this.user.email = user.email;
    }

    this._userSer.updateUser(this.user).subscribe((resp) => {
      console.log(resp);
    });
  }

  imageSelected(file) {
    if (!file) {
      this.imageToUpload = null;
      return;
    }

    if (file.type.indexOf("image") < 0) {
      swal(
        "Solo imagenes",
        "El archivo seleccionado no es una imagen",
        "error"
      );
      this.imageToUpload = null;
    }

    this.imageToUpload = file;

    let reader = new FileReader();
    let urlImageTemp = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imageTemp = reader.result.toString();
    };

    console.log(event);
  }

  changeImage() {
    this._userSer.changeImage(this.imageToUpload, this.user._id);
  }
}
