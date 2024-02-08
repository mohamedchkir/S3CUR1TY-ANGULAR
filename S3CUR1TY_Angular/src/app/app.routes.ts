import { Routes } from '@angular/router';
import path from "node:path";
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

export const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path: 'register',component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent}

]
