import { Component, OnInit } from "@angular/core";
import { UploadFileService } from "../../services/uploadFile/upload-file.service";
import { ModalUploadService } from "./modal-upload.service";

@Component({
  selector: "app-modal-upload",
  templateUrl: "./modal-upload.component.html",
  styleUrls: ["./modal-upload.component.css"],
})
export class ModalUploadComponent implements OnInit {
  imageToUpload: File;
  imageTemp: string;

  constructor(
    public uploadFileService: UploadFileService,
    public modalUploadService: ModalUploadService
  ) {}

  ngOnInit() {}

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

  uploadImage() {
    this.uploadFileService
      .uploadFile(
        this.imageToUpload,
        this.modalUploadService.collection,
        this.modalUploadService.id
      )
      .then((resp) => {
        this.modalUploadService.notification.emit(resp);
        this.modalUploadService.hideModal();
      })
      .catch((error) => {});
  }

  closeModal() {
    this.imageToUpload = null;
    this.imageTemp = null;
    this.modalUploadService.hideModal();
  }
}
