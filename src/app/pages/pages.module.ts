import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Charts1Component } from "./charts1/charts1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Charts1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Charts1Component,
    PagesComponent,
  ],
  imports: [SharedModule,PAGES_ROUTES],
})
export class PagesModule {}
