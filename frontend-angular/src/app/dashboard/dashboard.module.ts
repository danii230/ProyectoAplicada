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
import { EditarSexoComponent } from './sexo/editar-sexo/editar-sexo.component';
import { EditarTrimestreComponent } from './trimestre/editar-trimestre/editar-trimestre.component';
import { EditarTransaccionComponent } from './transaccion/editar-transaccion/editar-transaccion.component';
import { EditarFuncionarioComponent } from './funcionario/editar-funcionario/editar-funcionario.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { CrearAvanceComponent } from './avances/crear-avance/crear-avance.component';
import { EditarAvanceComponent } from './avances/editar-avance/editar-avance.component';
import { SolicitudesFechasComponent } from './solicitudes-fechas/solicitudes-fechas.component';
import { BitacoraTransaccionesComponent } from './bitacora-transacciones/bitacora-transacciones.component';
import { GraficoAvanceComponent } from './grafico-avance/grafico-avance.component';
import { GraficoEstadoComponent } from './grafico-estado/grafico-estado.component';






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
    EditarSexoComponent,
    EditarTrimestreComponent,
    EditarTransaccionComponent,
    EditarFuncionarioComponent,
    EditarDepartamentoComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    CrearAvanceComponent,
    EditarAvanceComponent,
    SolicitudesFechasComponent,
    BitacoraTransaccionesComponent,
    GraficoAvanceComponent,
    GraficoEstadoComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule

  ]
})
export class DashboardModule { }
