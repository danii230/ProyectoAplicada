import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import * as moment from 'moment';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  solicitud = new Solicitud();
  form: FormGroup;
  responsablesTI: any = [];
  responsablesUsuarioFinal: any = [];
  idResponsableTI = new FormControl('', Validators.required);
  idResponsableUsuarioFinal = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder, private solicitudService: SolicitudService,
    private router: Router, private generalService: GeneralService, private funcionarioService: FuncionarioService) {
    this.form = this.fb.group({
      idSolicitud: [''],
      fechaHora: [''],
      IdUsuarioAplicativo: [''],
      fechaInicio: [''],
      fechaFin: [''],
      idResponsableTi: ['', Validators.required],
      idResponsableUsuarioFinal: ['', Validators.required],
      idDepartamento: ['', Validators.required],
      fechaNacimiento: ['']
    })
  }
  public previsualizacion: string;
  public archivos: any = [];
  public loading: boolean;
  ngOnInit(): void {
    this.getResponsableTI();
    this.getResponsableUsuarioFinal();
  }

  agregarSolicitud() {

    let temp = this.generalService.getCookie("idFuncionario");
    this.solicitud.idUsuarioAplicativo = temp;
    this.solicitud.idResponsableTI = this.idResponsableTI.value;
    this.solicitud.fechaInicio = moment(this.form.value.fechaInicio).format("YYYY-MM-DD");
    this.solicitud.fechaFin = moment(this.form.value.fechaFin).format("YYYY-MM-DD");
    this.solicitud.idResponsableUsuarioFinal = this.idResponsableUsuarioFinal.value;

    this.encodeImageFileAsURL(this.archivos[0]).then(
      data => {
        console.log(data);
        this.solicitud.documentoActaConstitutiva = data;
        console.log(this.solicitud)
        this.solicitudService.ingresarSolicitud(this.solicitud).subscribe(data =>
          console.log(data));
        window.location.reload();
      }

    );



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

  getResponsableTI() {
    this.responsablesTI = [];
    this.funcionarioService.getFuncionario().subscribe((data: {}) => {
      console.log(data);
      this.responsablesTI = data;
    })
  }
  getResponsableUsuarioFinal() {
    this.responsablesUsuarioFinal = [];
    this.funcionarioService.getFuncionario().subscribe((data: {}) => {
      console.log(data);
      this.responsablesUsuarioFinal = data;
    })
  }
  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
    this.generalService.extraerBase64(archivoCapturado).then((imagen: any) => {

    })
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);

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

}
