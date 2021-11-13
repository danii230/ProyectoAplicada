import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/interfaces/funcionario';
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
      idSexo: [''],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
 
  agregarFuncionario() {
    let funcionario = new Funcionario();
    funcionario.nombre = this.form.value.nombre;
    funcionario.apellidos = this.form.value.apellidos;
    funcionario.fechaNacimiento = this.form.value.fechaNacional;
    funcionario.idSexo = this.form.value.idSexo;
    funcionario.loginName = this.form.value.loginName;
    funcionario.password = this.form.value.password;
    funcionario.idFoto = this.form.value.idFoto;
    funcionario.idDepartamento = this.form.value.idDepartamento;
    this.funcionarioService.ingresarFuncionario(funcionario).subscribe(data=>
    console.log(data));
    this.router.navigate(['/dashboard/funcionario'])
  }

}
