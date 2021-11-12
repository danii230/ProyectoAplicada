import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TrimestreService } from 'src/app/services/trimestre.service';
import { Trimestre } from 'src/app/interfaces/trimestre';

@Component({
  selector: 'app-trimestre',
  templateUrl: './trimestre.component.html',
  styleUrls: ['./trimestre.component.css']
})
export class TrimestreComponent implements OnInit {

  constructor(private trimestreService: TrimestreService) { }

  ngOnInit(): void {
    this.cargarTrimestre();
  }

  listTrimestre: Trimestre[] = [];

  displayedColumns: string[] = ['idTrimestre', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarTrimestre(){
    this.trimestreService.getTrimestre().subscribe(data =>{
    console.log(data);
    this.listTrimestre = data;
    this.dataSource = new MatTableDataSource(this.listTrimestre)
    this.dataSource.paginator = this.paginator;
  })
  }

  ngAfterViewInit() {
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  eliminarTrimestre(idTrimestre: any){
    this.trimestreService.delete(idTrimestre).subscribe(data=>
    console.log(data));
  }


}
