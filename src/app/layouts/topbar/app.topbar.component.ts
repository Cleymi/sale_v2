import { Component } from '@angular/core';
import { AppMainComponent } from '../main/app.main.component';
import { MenuItem } from 'primeng/api';
import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styles: ['.palette-color {background: -webkit-linear-gradient(#ff005e, #00ffbf); -webkit-background-clip: text; -webkit-text-fill-color: transparent}']
})
export class AppTopBarComponent {

  items: MenuItem[];

  constructor(
    public appMain: AppMainComponent,
    private authService: AuthService
  ) { }

  logOut() {
    this.authService.logOut()
  }

  onConfigButtonClick(event) {
    this.appMain.configActive = !this.appMain.configActive;
    this.appMain.configClick = true;
    event.preventDefault();
  }
}
