import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DepartamentoComponent } from '../departamento.component';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {
  form: FormGroup;
  departamento = new Departamento();
  id: number;
  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      idDepartamento: [''],
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.loadDepartamento(this.data.idDepartamento);

  }

  loadDepartamento(id: any): void {
    this.departamentoService.encontrarId(id).subscribe(data => {
      this.form.controls['idDepartamento'].setValue(data[0].idDepartamento);
      this.form.controls['descripcion'].setValue(data[0].descripcion);

    });
  }

  modificarDepartamento() {
    this.departamento.idDepartamento= this.form.value.idDepartamento;
    this.departamento.descripcion = this.form.value.descripcion;
    this.departamentoService.editarDepartamento(this.departamento).subscribe(data =>
      console.log(data));
      window.location.reload();
  }

}
