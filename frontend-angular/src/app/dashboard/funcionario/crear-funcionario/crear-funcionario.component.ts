import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SexoService } from 'src/app/services/sexo.service';
import { FormControl } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Sexo } from 'src/app/interfaces/sexo';


interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-crear-funcionario',
  templateUrl: './crear-funcionario.component.html',
  styleUrls: ['./crear-funcionario.component.css']
})
export class CrearFuncionarioComponent implements OnInit {

  form: FormGroup;
  sexos: any = [];
  departamentos: any = [];
  idSexo = new FormControl('', Validators.required);
  idDepartamento = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService,
    private router: Router, private sexoService: SexoService, private departamentoService: DepartamentoService) {
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
    this.getSexo();
    this.getDepartamento();
  }

  agregarFuncionario() {
    let funcionario = new Funcionario();
    funcionario.nombre = this.form.value.nombre;
    funcionario.apellidos = this.form.value.apellidos;
    funcionario.idSexo = this.idSexo.value;
    funcionario.loginName = this.form.value.loginName;
    funcionario.password = this.form.value.password;
    funcionario.idDepartamento = this.idDepartamento.value;
    funcionario.fechaNacimiento =this.form.value.fechaNacimiento;

    console.log(this.convertToDate(this.form.value.fechaNacimiento));
    // this.funcionarioService.ingresarFuncionario(funcionario).subscribe(data =>
    //   console.log(data));
    // this.router.navigate(['/dashboard/funcionario'])
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

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
  convertToDate(dateString) {
    //  Convert a "dd/MM/yyyy" string into a Date object
    let d = dateString.split("/");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    return dat;     
}

}

function newUYDate(pDate) {
  let dd = pDate.split("/")[0].padStart(2, "0");
  let mm = pDate.split("/")[1].padStart(2, "0");
  let yyyy = pDate.split("/")[2].split(" ")[0];
  let hh = pDate.split("/")[2].split(" ")[1].split(":")[0].padStart(2, "0");
  let mi = pDate.split("/")[2].split(" ")[1].split(":")[1].padStart(2, "0");
  let secs = pDate.split("/")[2].split(" ")[1].split(":")[2].padStart(2, "0");

  mm = (parseInt(mm) - 1).toString(); // January is 0

  return new Date(yyyy, mm, dd, hh, mi, secs);
}