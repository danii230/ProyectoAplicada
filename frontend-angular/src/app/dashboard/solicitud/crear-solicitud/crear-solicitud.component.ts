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

  form: FormGroup;
  responsablesTI: any = [];
  responsablesUsuarioFinal: any = [];
  idResponsableTI = new FormControl('', Validators.required);
  idResponsableUsuarioFinal = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder, private solicitudService: SolicitudService,
    private router: Router, private generalService: GeneralService,private funcionarioService: FuncionarioService) {
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
  ngOnInit(): void {
    this.getResponsableTI();
    this.getResponsableUsuarioFinal();
  }

  agregarSolicitud() {
    let solicitud = new Solicitud();
    let temp= this.generalService.getCookie("idFuncionario");
    solicitud.idUsuarioAplicativo = temp;
    solicitud.idResponsableTI = this.idResponsableTI.value;
    solicitud.fechaInicio = moment(this.form.value.fechaInicio).format("YYYY-MM-DD");
    solicitud.fechaFin = moment(this.form.value.fechaFin).format("YYYY-MM-DD");
    solicitud.idResponsableUsuarioFinal = this.idResponsableTI.value;
    this.solicitudService.ingresarSolicitud(solicitud).subscribe(data =>
    console.log(data));
    window.location.reload();
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

}
