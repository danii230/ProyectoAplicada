import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private solicitudService: SolicitudService, private router: Router) { }

  ngOnInit(): void {
    this.cargarFuncionario();
  }

  listsolicitud: Function[] = [];

  displayedColumns: string[] = ['idSolicitud', 'idUsuarioAplicativo', 'idResponsableTI','idResponsableUsuaioFinal', 'fechaInicio','fechaFin','acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarFuncionario(){
    this.solicitudService.getSolicitud().subscribe(data =>{
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

  eliminarSolicitud(idSolicitud: any){
    this.solicitudService.delete(idSolicitud).subscribe(data=>
    console.log(data));
  }

  manageSolicitud(idSolicitud: number){
    console.log(idSolicitud);
      this.router.navigate(['/dashboard/editar-solicitud/' + idSolicitud]);
  }

}
