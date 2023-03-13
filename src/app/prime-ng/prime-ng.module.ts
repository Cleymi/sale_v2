import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonModule } from 'primeng/radiobutton';

import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
/* import { ChartModule } from 'primeng/chart'; */
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    RadioButtonModule,
    TableModule,
    MenuModule,
    /* ChartModule, */
    InputTextModule,
    ButtonModule,
    BadgeModule
  ],
})
export class PrimeNgModule { }
