import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/interfaces/sexo';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SexoService } from 'src/app/services/sexo.service';
import { Router } from '@angular/router';


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


  constructor(private sexoService: SexoService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarMantenimientos();
  }

  public cargarMantenimientos(){
    this.sexoService.getSexo().subscribe(data =>{
    console.log(data);
    this.listSexo = data;
    this.dataSource = new MatTableDataSource(this.listSexo)
    this.dataSource.paginator = this.paginator;
  })
  }

  ngAfterViewInit() {
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarSexo(idSexo: any){
    this.sexoService.delete(idSexo).subscribe(data=>
    console.log(data));
  }

  manageSexo(idSexo: any){
      this.router.navigate(['dashboard/editar-sexo/' + idSexo]);
  }
}
