import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable()
      .pipe(retry(3))
      .subscribe(
        (number) => console.log("Subs", number),
        (err) => console.log("Error en el obs", err),
        () => console.log("El observador termino")
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable((observer) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter++;

        const salida = {
          value: counter,
        };

        observer.next(salida);

        // if (counter === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (counter == 2) {
        //   //clearInterval(interval);
        //   observer.error("Auxilio!!!");
        // }
      }, 1000);
    }).pipe(
      map((resp: any) => resp.value),
      filter((value, index) => {
        if (value % 2 === 1) {
          //impar
          return true;
        } else {
          //par
          return false;
        }
      })
    );
  }
}
