import { Component, OnInit } from '@angular/core';
import { mantenimientos } from 'src/app/interfaces/mantenimientos';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  listMantenimiento: mantenimientos[] = [];

  displayedColumns: string[] = ['id', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
    this.cargarMantenimientos();
  }

 public cargarMantenimientos(){
    this.mantenimientoService.getSexo().subscribe(data =>{
      console.log(data);
      this.listMantenimiento = data;
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
