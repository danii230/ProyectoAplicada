import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bitacora } from 'src/app/interfaces/bitacoraAuditoria';
import { BitacoraAuditoriaService } from 'src/app/services/bitacoraAuditoria';

@Component({
  selector: 'app-bitacora-transacciones',
  templateUrl: './bitacora-transacciones.component.html',
  styleUrls: ['./bitacora-transacciones.component.css']
})
export class BitacoraTransaccionesComponent implements OnInit {

  constructor(private bitacora: BitacoraAuditoriaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarTransaccion();
  }

  listTransaccion: Bitacora[] = [];

  displayedColumns: string[] = ['idBitacoraAuditoria', 'descripcion', 'idUsuarioAplicativo', 'fechaHora', 'idSolicitud'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarTransaccion(){
    this.bitacora.getBitacora().subscribe(data =>{
    this.listTransaccion = data;
    this.dataSource = new MatTableDataSource(this.listTransaccion)
    this.dataSource.paginator = this.paginator;
  })
  }

  ngAfterViewInit() {
 
  }
}
