import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.cargarFuncionario();
  }

  listFuncionario: Function[] = [];

  displayedColumns: string[] = ['idFuncionario', 'nombre','apellidos', 'fechaNacimiento','sexo','acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarFuncionario(){
    this.funcionarioService.getFuncionario().subscribe(data =>{
    console.log(data);
    this.listFuncionario = data;
    this.dataSource = new MatTableDataSource(this.listFuncionario)
  })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}