import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {Router} from "express";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    const url = state.url.toString() // Extract URL string
    const returnUrl = encodeURIComponent(url); // Encode for safe query parameter

    inject(Router).navigate(['/login'], { queryParams: { returnUrl } });
    return false;

  }
};
