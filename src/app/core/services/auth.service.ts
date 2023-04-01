import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse, Permission } from '../models/auth-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(authData: User) {
    return this.http.post(this.apiUrl + '/auth/login', authData).pipe(
      map((response: LoginResponse) => {
        const { permisions, user, token } = response.data;

        const dataPerm = permisions.map((perm: Permission) => {
          return perm.name;
        });

        const { created_at, updated_at, deleted_at, ...rest } = user;
        localStorage.setItem('user', JSON.stringify(rest)); //datos del usuario logueado
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('permissions', JSON.stringify(dataPerm));
        localStorage.setItem('super_user', JSON.stringify(user.super_user));
        localStorage.setItem('sales', JSON.stringify([])); // venta vacia
        return response;
      }),
    );
  }

  user() {
    return this.http.get(this.apiUrl + '/auth/user');
  }

  get userLocal() {
    return JSON.parse(localStorage.getItem('user'));
  }

  get tokenValue() {
    return JSON.parse(localStorage.getItem('token'));
  }

  get permissions() {
    return JSON.parse(localStorage.getItem('permissions'));
  }

  get superUser() {
    return JSON.parse(localStorage.getItem('super_user'));
  }

  logOut() {
    ['user', 'super_user', 'permissions', 'sales', 'token'].forEach((item) => {
      localStorage.removeItem(item);
    });
    this.router.navigate(['/login']);
    return this.http.post(this.apiUrl + '/auth/logout', '');
  }
}
