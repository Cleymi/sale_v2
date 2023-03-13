import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { getLocaleCurrencySymbol, getCurrencySymbol } from "@angular/common";
import { ConfigService } from '@service/app.config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Gaby Store';
  menuMode = 'static';

  cheatLocalSymbol = getLocaleCurrencySymbol("es-PE");
  cheatSymbol = getCurrencySymbol("es-PE", "wide");
  themeInital: string = localStorage.getItem("theme");

  constructor(
    private primengConfig: PrimeNGConfig,
    public configService: ConfigService,
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
    this.initialTheme("lara-light-teal", false)
  }

  initialTheme(theme: string, dark: boolean) {
    if (this.themeInital === null) {
      this.changeTheme(theme, dark);
      localStorage.setItem("theme", JSON.stringify({ theme: "lara-light-teal", dark: false }))
    } else {
      const dataTheme: any = JSON.parse(localStorage.getItem("theme"))
      this.changeTheme(dataTheme.theme, dataTheme.dark);
    }
  }

  changeTheme(theme: string, dark: boolean) {
    let themeElement = document.getElementById('theme-css');
    themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
    this.configService.updateConfig({ theme, dark });
    localStorage.setItem("theme", JSON.stringify({ theme: theme, dark: dark }))
  }

}
