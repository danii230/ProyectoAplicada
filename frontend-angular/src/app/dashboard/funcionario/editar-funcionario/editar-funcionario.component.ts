import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SexoService } from 'src/app/services/sexo.service';
import { TransaccionService } from 'src/app/services/transaccion.service';



@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})



export class EditarFuncionarioComponent implements OnInit {

  form: FormGroup;
  id: number;
  sexos: any = [];
  departamentos: any = [];
  nombre: any;
  fechaNacimiento: any;
  apellidos: any;
  loginName: any;
  password: any;
  selectedProfile : any;
  idSexo = new FormControl('', Validators.required);
  idDepartamento = new FormControl('', Validators.required);
  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, private sexoService: SexoService, private departamentoService: DepartamentoService,) {
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

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idFuncionario'));
    this.getSexo();
    this.getDepartamento();
    this.loadFuncionario(this.id);
  

  }

  loadFuncionario(id: any): void {
    this.funcionarioService.encontrarId(id).subscribe(data => {
      this.nombre = data[0].nombre;
      this.apellidos = data[0].apellidos;
      this.loginName = data[0].loginName;
      this.password = data[0].password;
      this.fechaNacimiento = data[0].fechaNacimiento;
      this.selectedProfile = data[0].idSexo;
      console.log(data);
      console.log(this.selectedProfile);
  

    });
  }

  modificarFuncionario() {
    let funcionario = new Funcionario();
    funcionario.idFuncionario = this.id;
    funcionario.nombre = this.form.value.nombre;
    this.funcionarioService.editarFuncionario(funcionario).subscribe(data =>
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
