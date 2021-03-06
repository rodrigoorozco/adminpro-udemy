import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";
import { RegisterComponent } from './login/register.component';

const routes: Routes = [  
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NoPageFoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash:true})