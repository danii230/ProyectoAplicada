import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';


@Component({
  selector: 'app-solicitudes-fechas',
  templateUrl: './solicitudes-fechas.component.html',
  styleUrls: ['./solicitudes-fechas.component.css']
})
export class SolicitudesFechasComponent implements OnInit {

  constructor(private solicitudService: SolicitudService, private generalService: GeneralService, 
    private router: Router,  public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.comprobarFechas();
  }

  listsolicitud: Function[] = [];

  displayedColumns: string[] = ['idSolicitud', 'idUsuarioAplicativo', 'idResponsableTI', 'idResponsableUsuaioFinal', 'fechaHora'];
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

  public comprobarFechas(){

  }

}
