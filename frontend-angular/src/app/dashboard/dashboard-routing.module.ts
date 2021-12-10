import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import {SexoComponent} from './sexo/sexo.component';
import { ReportesComponent } from './reportes/reportes.component';
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

const routes: Routes = [
  {path: '', component: DashboardComponent,children: [
    { path: '', component: InicioComponent},
    { path: 'sexo', component: SexoComponent },
    { path: 'crear-sexo', component: CrearSexoComponent },
    { path: 'trimestre', component: TrimestreComponent },
    { path: 'solicitudes-fechas', component: SolicitudesFechasComponent },
    { path: 'departamento', component: DepartamentoComponent },
    { path: 'funcionario', component: FuncionarioComponent },
    { path: 'transaccion', component: TransaccionComponent },
    { path: 'avance', component: AvancesComponent },
    { path: 'solicitud', component: SolicitudComponent },
    { path: 'cambios', component: CambiosComponent },
    { path: 'crear-trimestre', component: CrearTrimestreComponent },
    { path: 'crear-avance', component: CrearAvanceComponent },
    { path: 'crear-departamento', component: CrearDepartamentoComponent },
    { path: 'crear-funcionario', component: CrearFuncionarioComponent },
    { path: 'crear-transaccion', component: CrearTransaccionComponent },
    { path: 'crear-solicitud', component: CrearSolicitudComponent },
    { path: 'editar-sexo/:idSexo', component: EditarSexoComponent },
    { path: 'editar-trimestre/:idTrimestre', component: EditarTrimestreComponent },
    { path: 'editar-transaccion/:idTransaccion', component: EditarTransaccionComponent },
    { path: 'editar-avance/:idAvance', component: EditarAvanceComponent },
    { path: 'editar-solicitud/:idSolicitud', component: EditarSolicitudComponent },
    { path: 'editar-funcionario/:idFuncionario', component: EditarFuncionarioComponent },
    { path: 'editar-departamento/:idDepartamento', component: EditarDepartamentoComponent },
 
    { path: 'avances', component: AvancesComponent },
    { path: 'reportes', component: ReportesComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
