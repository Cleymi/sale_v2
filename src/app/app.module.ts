import { LOCALE_ID, NgModule } from '@angular/core';
import LocaleEsPe from "@angular/common/locales/es-PE";

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { AppMainComponent } from './layouts/main/app.main.component';
import { AppTopBarComponent } from './layouts/topbar/app.topbar.component';
import { AppFooterComponent } from './layouts/footer/app.footer.component';
import { AppConfigComponent } from './layouts/config/app.config.component';
import { AppMenuComponent } from './layouts/menu/app.menu.component';
import { AppMenuitemComponent } from './layouts/menu/menu-item/app.menu-item.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

import { MenuService } from './core/service/app.menu.service';
import { ConfigService } from './core/service/app.config.service';
import { ButtonModule } from 'primeng/button';

registerLocaleData(LocaleEsPe);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppConfigComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    NotFoundComponent
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: "es-PE"
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }, MenuService, ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
