import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  form: FormGroup;
  responsablesTI: any = [];
  solicitud = new Solicitud();
  responsablesUsuarioFinal: any = [];
  idResponsableTI = FormControl;
  idResponsableUsuarioFinal = FormControl;
  constructor(private fb: FormBuilder, private solicitudService: SolicitudService,
    private router: Router, private generalService: GeneralService, private funcionarioService : FuncionarioService) {
    this.form = this.fb.group({
      fechaInicio: [''],
      fechaFin: [''],
      idResponsableTI: ['', Validators.required],
      idResponsableUsuarioFinal: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.getResponsableTI();
    this.getResponsableUsuarioFinal();
  }

  loadSolicitud(id: any): void {
    this.solicitudService.encontrarId(id).subscribe(data => {
      this.form.controls['idSolicitud'].setValue(data[0].idSolicitud);
      this.form.controls['fechaInicio'].setValue(data[0].fechaInicio);
      this.form.controls['FechaFin'].setValue(data[0].fechaFin);
      this.idResponsableTI.setValue(data[0].idResponsableTI);
      this.idResponsableUsuarioFinal.setValue(data[0].idResponsableUsuarioFinal)
    });
  }

  modificarSolicitud() {
    this.solicitud.fechaInicio = moment(this.form.value.fechaInicio).format("YYYY-MM-DD");
    this.solicitud.fechaFin = moment(this.form.value.fechaFin).format("YYYY-MM-DD");
    this.solicitud.idResponsableTI = this.form.value.idResponsableTI;
    this.solicitud.idResponsableUsuarioFinal = this.form.value.idResponsableUsuarioFinal;
    console.log(this.solicitud);
    this.solicitudService.editarSolicitud(this.solicitud).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/funcionario'])
  }

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
