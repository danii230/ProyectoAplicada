import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SexoComponent } from './sexo/sexo.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SharedModule } from '../shared/shared.module';
import { TrimestreComponent } from './trimestre/trimestre.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CambiosComponent } from './cambios/cambios.component';
import { AvancesComponent } from './avances/avances.component';
import { CrearSexoComponent } from './sexo/crear-sexo/crear-sexo.component';
import { CrearTrimestreComponent } from './trimestre/crear-trimestre/crear-trimestre.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { CrearFuncionarioComponent } from './funcionario/crear-funcionario/crear-funcionario.component';
import { CrearTransaccionComponent } from './transaccion/crear-transaccion/crear-transaccion.component';






@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    SexoComponent,
    ReportesComponent,
    TrimestreComponent,
    DepartamentoComponent,
    FuncionarioComponent,
    TransaccionComponent,
    SolicitudComponent,
    CambiosComponent,
    AvancesComponent,
    CrearSexoComponent,
    CrearTrimestreComponent,
    CrearDepartamentoComponent,
    CrearFuncionarioComponent,
    CrearTransaccionComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule

  ]
})
export class DashboardModule { }
