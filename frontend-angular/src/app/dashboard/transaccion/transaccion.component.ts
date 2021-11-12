import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { isDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit(): void {
    this.cargarTransaccion();
  }

  listTransaccion: Transaccion[] = [];

  displayedColumns: string[] = ['idTransaccion', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarTransaccion(){
    this.transaccionService.getTransaccion().subscribe(data =>{
    console.log(data);
    this.listTransaccion = data;
    this.dataSource = new MatTableDataSource(this.listTransaccion)
  })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminarTransaccion(idTrimestre: any){
    this.transaccionService.delete(idTrimestre).subscribe(data=>
    console.log(data));
  }
}
