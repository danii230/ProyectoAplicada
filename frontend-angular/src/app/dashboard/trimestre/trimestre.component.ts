import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TrimestreService } from 'src/app/services/trimestre.service';
import { Trimestre } from 'src/app/interfaces/trimestre';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CrearTrimestreComponent } from './crear-trimestre/crear-trimestre.component';
import { DialogoConfirmacionComponent } from 'src/app/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-trimestre',
  templateUrl: './trimestre.component.html',
  styleUrls: ['./trimestre.component.css']
})
export class TrimestreComponent implements OnInit {

  constructor(private trimestreService: TrimestreService, private router: Router,
     public dialogo: MatDialog) { }

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

  manageTrimestre(idTrimestre: number){
    console.log(idTrimestre);
      this.router.navigate(['/dashboard/editar-trimestre/' + idTrimestre]);
  }

  openDialog() {
    this.dialogo.open(CrearTrimestreComponent,
      {
        height: '400px',
        width: '600px',
      });
   
  }

  mostrarDialogo(idTrimestre: any): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarTrimestre(idTrimestre);
        } else {
          alert("");
        }
      });
  }


}
