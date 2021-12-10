import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import * as moment from 'moment';


@Component({
  selector: 'app-solicitudes-fechas',
  templateUrl: './solicitudes-fechas.component.html',
  styleUrls: ['./solicitudes-fechas.component.css']
})
export class SolicitudesFechasComponent implements OnInit {

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  constructor(private solicitudService: SolicitudService, private generalService: GeneralService,
    private router: Router, public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargarFuncionario();
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

  public comprobarFechas() {
    this.solicitudService.getSolicitud().subscribe(data => {
      console.log(data);
      this.listsolicitud = data;
      this.dataSource = new MatTableDataSource(this.listsolicitud)
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter() {

    this.solicitudService.getSolicitud().subscribe(data => {
      this.listsolicitud = data;
      this.dataSource.data = this.listsolicitud;
      console.log(this.filterForm.value.fromDate);
      this.dataSource.data = this.dataSource.data.filter(e => new Date(e.fechaHora) >= new Date(this.filterForm.value.fromDate) && new Date(e.fechaHora) <= new Date(this.filterForm.value.toDate));

      this.dataSource.paginator = this.paginator;
    })


  }
}
