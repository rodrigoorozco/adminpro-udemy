import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Charts1Component } from "./charts1/charts1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "Dashboard" },
      },
      {
        path: "progress",
        component: ProgessComponent,
        data: { title: "Progreso" },
      },
      {
        path: "charts1",
        component: Charts1Component,
        data: { title: "Graficas" },
      },
      {
        path: "promises",
        component: PromisesComponent,
        data: { title: "Promesas" },
      },
      { path: "rxjs", component: RxjsComponent, data: { title: "RxJs" } },
      {
        path: "account-settings",
        component: AccountSettingsComponent,
        data: { title: "Ajustes del tema" },
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    ],
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
