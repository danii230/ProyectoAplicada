import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';
import { CrearFuncionarioComponent } from './crear-funcionario/crear-funcionario.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/dialogo-confirmacion/dialogo-confirmacion.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService, private router: Router,
    public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargarFuncionario();
  }

  listFuncionario: Function[] = [];

  displayedColumns: string[] = ['idFuncionario', 'nombre','apellidos', 'loginName','departamento','acciones'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  public cargarFuncionario(){
    this.funcionarioService.getFuncionario().subscribe(data =>{
    console.log(data);
    this.listFuncionario = data;
    this.dataSource = new MatTableDataSource(this.listFuncionario)
    this.dataSource.paginator = this.paginator;
  })
  }

  ngAfterViewInit() {
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarfuncionario(idFuncionario: any){
    this.funcionarioService.delete(idFuncionario).subscribe(data=>
    console.log(data));
  }

  manageFuncionario(idFuncionario: number){
    console.log(idFuncionario);
      this.router.navigate(['/dashboard/editar-funcionario/' + idFuncionario]);
  }

  mostrarDialogo(idFuncionario: any): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Desea eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarfuncionario(idFuncionario);
        } else {
          alert("");
        }
      });
  }

  editarModal(idFuncionario: any) {
    this.dialogo.open(EditarFuncionarioComponent,
      {
       height: '400px',
       width: '600px',
       data: {
          idFuncionario:idFuncionario
       }
       
      });
  
 }

}
