import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProgessComponent } from "./pages/progess/progess.component";
import { Charts1Component } from "./pages/charts1/charts1.component";
import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgessComponent },
      { path: "charts1", component: Charts1Component },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
