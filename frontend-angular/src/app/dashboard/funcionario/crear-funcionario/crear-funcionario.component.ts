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
import * as moment from 'moment';
import { GeneralService } from 'src/app/services/general.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Alert } from 'selenium-webdriver';



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
  funcionario = new Funcionario();
  form: FormGroup;
  sexos: any = [];
  departamentos: any = [];
  idSexo = new FormControl('', Validators.required);
  idDepartamento = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService,
    private router: Router, private sanitizer: DomSanitizer, private sexoService: SexoService, private departamentoService: DepartamentoService, private generalService: GeneralService) {
    this.form = this.fb.group({
      idFuncionario: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      idSexo: ['', Validators.required],
      idDepartamento: ['', Validators.required],
      fechaNacimiento: [''],
    })
  }
  public previsualizacion: string;
  public archivos: any = [];
  public loading: boolean;
  image: any = "../"
  ngOnInit(): void {
    this.getSexo();
    this.getDepartamento();
  }

  agregarFuncionario() {
    try {

      this.funcionario.nombre = this.form.value.nombre;
      this.funcionario.apellidos = this.form.value.apellidos;
      this.funcionario.idSexo = this.idSexo.value;
      this.funcionario.loginName = this.form.value.loginName;
      this.funcionario.password = this.form.value.password;
      this.funcionario.idDepartamento = this.idDepartamento.value;
      this.funcionario.fechaNacimiento = moment(this.form.value.fechaNacimiento).format("YYYY-MM-DD");
      this.encodeImageFileAsURL(this.archivos[0]).then(
        data => {
          console.log(data);
          this.funcionario.foto = data;
          console.log(this.funcionario)
          this.funcionarioService.ingresarFuncionario(this.funcionario).subscribe(data =>
            console.log(data));
            window.location.reload();
        }

      );

    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);

    }
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

  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
    this.generalService.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)



    // 
    // console.log(event.target.files);

  }
  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  encodeImageFileAsURL(file) {

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


getDataFromBlob = (myBlob) => {
  //   return new Promise((resolve, reject) => {
  //     let reader = new FileReader();
  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };
  //     reader.onerror = reject;
  //     reader.readAsDataURL(myBlob);
  //   })
  return this.sanitizer.bypassSecurityTrustUrl(myBlob);
   }

  }