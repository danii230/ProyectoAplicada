import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/dialogo-confirmacion/dialogo-confirmacion.component';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private solicitudService: SolicitudService, private generalService: GeneralService, 
    private router: Router,  public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargarFuncionario();
  }

  listsolicitud: Function[] = [];

  displayedColumns: string[] = ['idSolicitud', 'idUsuarioAplicativo', 'idResponsableTI', 'idResponsableUsuaioFinal', 'fechaInicio', 'fechaFin', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarFuncionario() {
    this.solicitudService.getSolicitud().subscribe(data => {
      console.log(data);
      this.listsolicitud = data;
      this.dataSource = new MatTableDataSource(this.listsolicitud)
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarSolicitud(idSolicitud: any) { 
    let temp= this.generalService.getCookie("idFuncionario");
    this.solicitudService.delete(idSolicitud, temp).subscribe(data=>
    console.log(data));
  }

  manageSolicitud(idSolicitud: number) {
    console.log(idSolicitud);
    this.router.navigate(['/dashboard/editar-solicitud/' + idSolicitud]);
  }

  openDialog() {
    this.dialogo.open(CrearSolicitudComponent,
      {
        height: '400px',
        width: '600px',
      });
   
  }

  mostrarDialogo(idSolicitud: any): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarSolicitud(idSolicitud);
        } else {
        }
      });
  }

  editarModal(idSolicitud: any) {
    this.dialogo.open(EditarSolicitudComponent,
      {
       height: '400px',
       width: '600px',
       data: {
        idSolicitud:idSolicitud
       }
       
      });
  
 }


}
