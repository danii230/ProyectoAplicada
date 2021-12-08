import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SexoService } from 'src/app/services/sexo.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})



export class EditarFuncionarioComponent implements OnInit {

  form: FormGroup;
  id: number;
  sexos: any = [];
  funcionario = new Funcionario();
  departamentos: any = [];
  idSexo: FormControl;
  idDepartamento: FormControl
  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, private sexoService: SexoService, private departamentoService: DepartamentoService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      idFuncionario: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      idSexo: ['', Validators.required],
      idDepartamento: ['', Validators.required],
      fechaNacimiento: ['']
    })
    this.idSexo = new FormControl('', Validators.required);
    this.idDepartamento = new FormControl('', Validators.required);
  }

  ngOnInit(): void {

    this.loadFuncionario(this.data.idFuncionario);
    this.getSexo();
    this.getDepartamento();
    this.loadFuncionario(this.id);


  }

  loadFuncionario(id: any): void {
    this.funcionarioService.encontrarId(id).subscribe(data => {
      this.form.controls['idFuncionario'].setValue(data[0].idFuncionario);
      this.form.controls['nombre'].setValue(data[0].nombre);
      this.form.controls['apellidos'].setValue(data[0].apellidos);
      this.form.controls['loginName'].setValue(data[0].loginName);
      this.form.controls['password'].setValue(data[0].password);
      this.form.controls['fechaNacimiento'].setValue(data[0].fechaNacimiento);
      this.idSexo.setValue(data[0].idSexo);
      this.idDepartamento.setValue(data[0].idDepartamento)
    });
  }

  modificarFuncionario() {
    this.funcionario.idFuncionario = this.form.value.idFuncionario;
    this.funcionario.nombre = this.form.value.nombre;
    this.funcionario.apellidos = this.form.value.apellidos;
    this.funcionario.loginName = this.form.value.loginName;
    this.funcionario.password = this.form.value.password;
    this.funcionario.idSexo = this.idSexo.value;
    this.funcionario.idDepartamento = this.idDepartamento.value;
    this.funcionario.fechaNacimiento = moment(this.form.value.fechaNacimiento).format("YYYY-MM-DD");
    console.log(this.funcionario);
    this.funcionarioService.editarFuncionario(this.funcionario).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/funcionario'])
  }

  getSexo() {
    this.sexos = [];
    this.sexoService.getSexo().subscribe((data: {}) => {
      console.log(data);
      this.sexos = data;
    })
  }
  getDepartamento() {
    this.departamentos = [];
    this.departamentoService.getDepartamento().subscribe((data: {}) => {
      console.log(data);
      this.departamentos = data;
    })
  }
}
