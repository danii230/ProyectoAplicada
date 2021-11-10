import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/interfaces/sexo';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SexoService } from 'src/app/services/sexo.service';


@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css']
})
export class SexoComponent implements OnInit {

  listSexo: Sexo[] = [];

  displayedColumns: string[] = ['idSexo', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private sexoService: SexoService) { }

  ngOnInit(): void {
    this.cargarMantenimientos();
  }

 public cargarMantenimientos(){
    this.listSexo = this.sexoService.getSexo();
    this.dataSource = new MatTableDataSource(this.listSexo)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
