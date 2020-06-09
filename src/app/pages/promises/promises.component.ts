import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promises",
  templateUrl: "./promises.component.html",
  styles: [],
})
export class PromisesComponent implements OnInit {
  constructor() {
    this.countThree()
      .then((msg) => console.log("Termino", msg))
      .catch((err) => {
        console.log("Error en la promesa", err);
      });
  }

  ngOnInit() {}

  countThree(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        if (counter === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
