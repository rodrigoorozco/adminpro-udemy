import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ModalUploadService {
  public collection: string;
  public id: string;
  public hide: string = "displayNone";

  public notification = new EventEmitter<any>();

  constructor() {}

  hideModal() {
    this.hide = "displayNone";
    this.id = null;
    this.collection = null;
  }

  showModal(collection: string, id: string) {
    this.hide = "";
    this.id = id;
    this.collection = collection;
  }
}
