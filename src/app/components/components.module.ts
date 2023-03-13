import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

import { EmptyComponent } from './empty/empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    EmptyComponent,
    DashboardComponent,
    CustomersComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class ComponentsModule { }
