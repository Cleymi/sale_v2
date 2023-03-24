import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as queryString from 'query-string'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  apiUrl: string = environment.apiUrl

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  /* Obtener listado para tablas*/
  getAll(entity: string, params?: any): any {
    return this.http.get<any>(this.apiUrl + entity, { params: params });
  }

  /* Obtener data por id*/
  getById(entity: string, id: any, attribute?: any): any {
    let url;
    attribute ? url = '?' + queryString.stringify(attribute, { sort: false }) : url = '';
    return this.http.get<any>(this.apiUrl + entity + id + url);
  }

  getFindBy(entity: string, attribute?: any, params?: any) {
    let url;
    attribute ? url = '?' + queryString.stringify(attribute, { sort: false }) : url = '';
    return this.http.get<any>(this.apiUrl + entity + url, { params: params })
  }

  update(entity: string, id: any, data: any): any {
    return this.http.put<any>(this.apiUrl + entity + id, data);
  }

  delete(entity: string, id: string, body?: any): any {
    return this.http.delete<any>(this.apiUrl + entity + id, body);
  }

  create(entity: string, data: any) {
    return this.http.post<any>(this.apiUrl + entity, data);
  }

  getParams(key) {
    let params = {};
    let route = this.router.routerState.snapshot.root;
    do {
      for (let key in route.params) {
        params[key] = route.params[key];
      }
      route = route.firstChild;
    } while (route);
    return parseFloat(params[key])
  }

}
