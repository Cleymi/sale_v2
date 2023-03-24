import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PermissionService {
  permissions = [];

  constructor() {
    this.permissions = JSON.parse(localStorage.getItem("items"));
  }

  // funciona como or
  has(permissionNames: any): boolean {
    if (Array.isArray(permissionNames)) {
      for (let permissionName of permissionNames) {
        let hasPermission = this.permissions.includes(permissionName);
        if (hasPermission)
          return true;
      }
      return false;
    } else {
      return this.permissions.includes(permissionNames);
    }
  }

  // falta funcion de and
}