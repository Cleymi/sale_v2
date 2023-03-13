import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from '../main/app.main.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[];

  constructor(
    public appMain: AppMainComponent
  ) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Inicio',
        items: [
          { label: 'Dashboard', icon: 'fas fa-home', routerLink: ['/home'] },
          { label: 'Productos', icon: 'fas fa-gem', routerLink: ['/products'] },
          { label: 'Clientes', icon: 'fas fa-user-tag', routerLink: ['/customers'] },
          { label: 'Vacío', icon: 'fas fa-file-alt', routerLink: ['/free'] },
        ]
      }
    ];
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement>event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
