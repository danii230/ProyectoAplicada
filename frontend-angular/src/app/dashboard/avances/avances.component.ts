import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/dialogo-confirmacion/dialogo-confirmacion.component';
import { AvanceService } from 'src/app/services/avance.service';
import { GeneralService } from 'src/app/services/general.service';
import { CrearAvanceComponent } from './crear-avance/crear-avance.component';
import { EditarAvanceComponent } from './editar-avance/editar-avance.component';

@Component({
  selector: 'app-avances',
  templateUrl: './avances.component.html',
  styleUrls: ['./avances.component.css']
})
export class AvancesComponent implements OnInit {

  constructor(private avanceService: AvanceService, private generalService: GeneralService, 
    private router: Router,  public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargarAvance();
  }

  listavance: Function[] = [];

  displayedColumns: string[] = ['idAvance', 'idUsuarioAplicativo', 'idTrimestre', 'idSolicitud', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarAvance() {
    this.avanceService.getAvance().subscribe(data => {
      console.log(data);
      this.listavance = data;
      this.dataSource = new MatTableDataSource(this.listavance)
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarAvance(idAvance: any) { 
    let temp= this.generalService.getCookie("idFuncionario");
    this.avanceService.delete(idAvance, temp).subscribe(data=>
    console.log(data));
  }

  manageAvance(idAvance: number) {
    console.log(idAvance);
    this.router.navigate(['/dashboard/editar-avance/' + idAvance]);
  }

  openDialog() {
    this.dialogo.open(CrearAvanceComponent,
      {
        height: '400px',
        width: '600px',
      });
   
  }

  mostrarDialogo(idSexo: any): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarAvance(idSexo);
        } else {
          alert("");
        }
      });
  }

  editarModal(idAvance: any) {
    this.dialogo.open(EditarAvanceComponent,
      {
       height: '400px',
       width: '600px',
       data: {
        idAvance:idAvance
       }
       
      });
  
 }
}
