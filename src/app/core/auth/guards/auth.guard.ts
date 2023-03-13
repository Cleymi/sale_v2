import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authService: any = localStorage.getItem("token") //TODO sacar el token del localStorage

  constructor(
    /* private authService: AuthService, */
    private router: Router
  ) { }

  canActivate() {
    return this.authService !== null ? true : this.router.navigate(['auth/login'])
  }

}
