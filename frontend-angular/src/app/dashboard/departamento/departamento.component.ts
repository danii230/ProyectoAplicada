import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CrearDepartamentoComponent } from './crear-departamento/crear-departamento.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService, private router: Router,
    public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargarDepartamento();
  }

  listDepartamento: Departamento[] = [];

  displayedColumns: string[] = ['idDepartamento', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarDepartamento() {
    this.departamentoService.getDepartamento().subscribe(data => {
      this.listDepartamento = data;
      this.dataSource = new MatTableDataSource(this.listDepartamento)
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDepartamento(idDepartamento: any) {
    this.departamentoService.delete(idDepartamento).subscribe(data =>
      console.log(data));
  }

  manageDepartamento(idDepartamento: number) {
    console.log(idDepartamento);
    this.router.navigate(['/dashboard/editar-departamento/' + idDepartamento]);
  }

  openDialog() {
    this.dialogo.open(CrearDepartamentoComponent,
      {
        height: '400px',
        width: '600px',
      });

  }

  mostrarDialogo(idDepartamento: any): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea eliminar departamento?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarDepartamento(idDepartamento);
        } else {
        }
      });
  }


}
