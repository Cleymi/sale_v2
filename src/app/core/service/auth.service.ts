import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  logIn() {
    localStorage.setItem('token', 'adfsdjkhfsdgfuik');
    this.router.navigate(['home'])
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

}
