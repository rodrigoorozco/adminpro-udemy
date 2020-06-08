import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progess",
  templateUrl: "./progess.component.html",
  styles: [],
})
export class ProgessComponent implements OnInit {
  progress1: number = 50;
  progress2: number = 30;

  constructor() {}

  ngOnInit() {}

}
