import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { isDataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { CrearTransaccionComponent } from './crear-transaccion/crear-transaccion.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/dialogo-confirmacion/dialogo-confirmacion.component';
import { EditarTransaccionComponent } from './editar-transaccion/editar-transaccion.component';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  constructor(private transaccionService: TransaccionService, private router: Router,
    public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargarTransaccion();
  }

  listTransaccion: Transaccion[] = [];

  displayedColumns: string[] = ['idTransaccion', 'descripcion', 'acciones'];
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminarTransaccion(idTransaccion: any){
    this.transaccionService.delete(idTransaccion).subscribe(data=>
    console.log(data));
  }

  manageTransaccion(idTransaccion: number){
    console.log(idTransaccion);
      this.router.navigate(['/dashboard/editar-transaccion/' + idTransaccion]);
  }

  openDialog() {
    this.dialogo.open(CrearTransaccionComponent,
      {
        height: '400px',
        width: '600px',
      });
   
  }

  mostrarDialogo(idTransaccion: any): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea eliminar trasaccion?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarTransaccion(idTransaccion);
        } 
      });
  }

  editarModal(idTransaccion: any) {
    this.dialogo.open(EditarTransaccionComponent,
      {
       height: '400px',
       width: '600px',
       data: {
          idTransaccion:idTransaccion
       }
       
      });
  
 }
}
