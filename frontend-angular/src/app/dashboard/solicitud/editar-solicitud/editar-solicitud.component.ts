import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  form: FormGroup;
  responsablesTI: any = [];
  responsablesUsuarioFinal: any = [];
  solicitud = new Solicitud();
  idResponsableTI = new FormControl('', Validators.required);
  idResponsableUsuarioFinal = new FormControl('', Validators.required);
  constructor(private solicitudService: SolicitudService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, private funcionarioService: FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public data: any, private generalService: GeneralService) {
    this.form = this.fb.group({
      idSolicitud: [''],
      fechaHora: [''],
      idUsuarioAplicativo: [''],
      fechaInicio: [''],
      fechaFin: [''],
      idResponsableTI: ['', Validators.required],
      idResponsableUsuarioFinal: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.getResponsableTI();
    this.getResponsableUsuarioFinal();
    this.loadSolicitud(this.data.idSolicitud);
    console.log(this.data.idSolicitud);
  }

  loadSolicitud(id: any): void {
    this.solicitudService.encontrarId(id).subscribe(data => {
      console.log(data);
      this.form.controls['idSolicitud'].setValue(data[0].idSolicitud);
      this.form.controls['idUsuarioAplicativo'].setValue(data[0].idUsuarioAplicativo);
      this.form.controls['fechaHora'].setValue(moment(data[0].fechaHora).format('lll'));
      this.form.controls['fechaInicio'].setValue(data[0].fechaInicio);
      this.form.controls['fechaFin'].setValue(data[0].fechaFin);
      this.idResponsableTI.setValue(data[0].idResponsableTI);
      this.idResponsableUsuarioFinal.setValue(data[0].idResponsableUsuarioFinal)
    });
  }

  modificarSolicitud() {
    this.solicitud.idSolicitud = this.form.value.idSolicitud;
    this.solicitud.idUsuarioAplicativo = this.form.value.idUsuarioAplicativo;
    this.solicitud.fechaHora= this.form.value.fechaHora;
    this.solicitud.fechaInicio = moment(this.form.value.fechaInicio).format("YYYY-MM-DD");
    this.solicitud.fechaFin = moment(this.form.value.fechaFin).format("YYYY-MM-DD");
    this.solicitud.idResponsableTI = this.idResponsableTI.value;
    this.solicitud.idResponsableUsuarioFinal = this.idResponsableUsuarioFinal.value;
    this.solicitud.idUsuarioAplicativo_temp= this.generalService.getCookie("idFuncionario");

   
    console.log(this.solicitud);
    this.solicitudService.editarSolicitud(this.solicitud).subscribe(data =>
    console.log(data));
    window.location.reload();
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
