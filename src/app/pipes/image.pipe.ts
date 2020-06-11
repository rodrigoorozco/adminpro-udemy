import { Pipe, PipeTransform } from "@angular/core";
import { URL_SERVICES } from "../config/config";

@Pipe({
  name: "image",
})
export class ImagePipe implements PipeTransform {
  transform(img: string, collection: string = "user"): any {
    let url = URL_SERVICES + "/image/";

    if (!img) {
      return url + "/user/abc";
    }

    if (img.indexOf("https") >= 0) {
      return img;
    }

    return url + "./" + collection + "/" + img;
  }
}
