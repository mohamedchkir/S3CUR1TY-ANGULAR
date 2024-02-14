import { Routes } from '@angular/router';
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path: 'register',component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [authGuard]}

]
