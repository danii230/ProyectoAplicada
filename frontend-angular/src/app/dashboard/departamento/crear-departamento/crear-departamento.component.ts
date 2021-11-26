import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit {

  form: FormGroup;
  // sexo: Sexo;
  constructor(private fb: FormBuilder, private departamentoService: DepartamentoService,
    private router: Router) {
    this.form = this.fb.group({
      idSexo: [''],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
 
  agregarDepartamento() {
    let departamento = new Departamento();
    departamento.descripcion = this.form.value.descripcion;
    this.departamentoService.ingresarDepartamento(departamento).subscribe(data=>
    console.log(data));
    window.location.reload();
  }
}
