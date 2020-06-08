import { Component, OnInit, Input } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-chart-donut",
  templateUrl: "./chart-donut.component.html",
  styles: [],
})
export class ChartDonutComponent implements OnInit {
  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: MultiDataSet = [];
  @Input() public doughnutChartType: ChartType = "doughnut";
  @Input() title = ""
  

  constructor() {}

  ngOnInit() {}
}
