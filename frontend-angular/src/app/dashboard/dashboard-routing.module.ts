import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,children: [
    { path: '', component: InicioComponent},
    { path: 'mantenimiento', component: MantenimientoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
