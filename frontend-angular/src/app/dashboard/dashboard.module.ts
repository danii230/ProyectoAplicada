import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SharedModule } from '../shared/shared.module';






@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    MantenimientoComponent,
    ReportesComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule

  ]
})
export class DashboardModule { }
