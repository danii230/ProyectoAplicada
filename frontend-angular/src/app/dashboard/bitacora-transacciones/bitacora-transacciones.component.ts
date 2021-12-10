import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-bitacora-transacciones',
  templateUrl: './bitacora-transacciones.component.html',
  styleUrls: ['./bitacora-transacciones.component.css']
})
export class BitacoraTransaccionesComponent implements OnInit {

  constructor(private transaccionService: TransaccionService, private router: Router) { }

  ngOnInit(): void {
    this.cargarTransaccion();
  }

  listTransaccion: Transaccion[] = [];

  displayedColumns: string[] = ['idTransaccion', 'descripcion'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarTransaccion(){
    this.transaccionService.getTransaccion().subscribe(data =>{
    this.listTransaccion = data;
    this.dataSource = new MatTableDataSource(this.listTransaccion)
    this.dataSource.paginator = this.paginator;
  })
  }

  ngAfterViewInit() {
 
  }
}
