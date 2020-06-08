import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-incrementor",
  templateUrl: "./incrementor.component.html",
  styles: [],
})
export class IncrementorComponent implements OnInit {

  @Input()  progress: number = 50;

  @Input("name") title: string = "Titulo del componente"; //Cambiar nombre del input

  @Output() onValueChange: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress', {static: true }) txtProgress: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
    this.onValueChange.emit(this.progress);

    this.txtProgress.nativeElement.focus();
  }

  onModelChange(value: number) {
    // let htmlElement: any = document.getElementsByName("progress")[0];

    console.log(this.txtProgress);

    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    // htmlElement.value = Number(this.progress);
    this.txtProgress.nativeElement.value

    this.onValueChange.emit(this.progress);
  }
}
