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

const routes: Routes = [
  {path: '', component: DashboardComponent,children: [
    { path: '', component: InicioComponent},
    { path: 'sexo', component: SexoComponent },
    { path: 'crear-sexo', component: CrearSexoComponent },
    { path: 'trimestre', component: TrimestreComponent },
    { path: 'departamento', component: DepartamentoComponent },
    { path: 'funcionario', component: FuncionarioComponent },
    { path: 'transaccion', component: TransaccionComponent },
    { path: 'solicitud', component: SolicitudComponent },
    { path: 'cambios', component: CambiosComponent },
    { path: 'avances', component: AvancesComponent },
    { path: 'reportes', component: ReportesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
