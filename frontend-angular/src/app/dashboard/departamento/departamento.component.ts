import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.cargarDepartamento();
  }

  listDepartamento: Departamento[] = [];

  displayedColumns: string[] = ['idDepartamento', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarDepartamento(){
    this.departamentoService.getDepartamento().subscribe(data =>{
    console.log(data);
    this.listDepartamento = data;
    this.dataSource = new MatTableDataSource(this.listDepartamento)
  })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDepartamento(idDepartamento: any){
    this.departamentoService.delete(idDepartamento).subscribe(data=>
    console.log(data));
  }

}
