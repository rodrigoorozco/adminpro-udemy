import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Charts1Component } from "./charts1/charts1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

//temporal
import { IncrementorComponent } from "../components/incrementor/incrementor.component";
import { ChartDonutComponent } from "../components/chart-donut/chart-donut.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { PipesModule } from "../pipes/pipes.module";
import { ProfileComponent } from "./profile/profile.component";
import { CommonModule } from "@angular/common";
import { UserComponent } from './user/user.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Charts1Component,
    PagesComponent,
    IncrementorComponent,
    ChartDonutComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
    UserComponent,
    ModalUploadComponent
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Charts1Component,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule,
  ],
})
export class PagesModule {}
