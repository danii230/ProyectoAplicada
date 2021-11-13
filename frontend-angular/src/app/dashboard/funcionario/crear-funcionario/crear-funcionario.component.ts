import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-crear-funcionario',
  templateUrl: './crear-funcionario.component.html',
  styleUrls: ['./crear-funcionario.component.css']
})
export class CrearFuncionarioComponent implements OnInit {

  form: FormGroup;
  // sexo: Sexo;
  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService,
    private router: Router) {
    this.form = this.fb.group({
      idFuncionario: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      idSexo: ['', Validators.required],
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      idDepartamento: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
 
  agregarFuncionario() {
    let funcionario = new Funcionario();
    funcionario.nombre = this.form.value.nombre;
    funcionario.apellidos = this.form.value.apellidos;
    funcionario.idSexo = this.form.value.idSexo;
    funcionario.loginName = this.form.value.loginName;
    funcionario.password = this.form.value.password;
    funcionario.idDepartamento = this.form.value.idDepartamento;
    this.funcionarioService.ingresarFuncionario(funcionario).subscribe(data=>
    console.log(data));
    this.router.navigate(['/dashboard/funcionario'])
  }
}
