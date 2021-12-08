import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrimestreService } from 'src/app/services/trimestre.service';
import { AvanceService } from 'src/app/services/avance.service';
import { Avance } from 'src/app/interfaces/avance';

@Component({
  selector: 'app-editar-avance',
  templateUrl: './editar-avance.component.html',
  styleUrls: ['./editar-avance.component.css']
})
export class EditarAvanceComponent implements OnInit {

  form: FormGroup;
  avance = new Avance();
  usuariosAplicativos: any = [];
  solicitudes: any = [];
  trimestres: any = []; 
  idUsuarioAplicativo = new FormControl('', Validators.required);
  idSolicitud = new FormControl('', Validators.required);
  idTrimestre = new FormControl('', Validators.required);
  constructor(private avanceService: AvanceService,private solicitudService: SolicitudService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, private funcionarioService: FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public data: any, private generalService: GeneralService, private trimestreService: TrimestreService) { 


      this.form = this.fb.group({
        idAvance: [''],
        idTrimestre: ['', Validators.required],
        idUsuarioAplicativo: ['', Validators.required],
        idSolicitud: ['', Validators.required],
      })
    }

  ngOnInit(): void {

    this.getTrimestre();
    this.getUsuarioAplicativo();
    this.getSolicitud();
    this.loadAvance(this.data.idAvance);
  }

  loadAvance(id: any): void {
    this.avanceService.encontrarId(id).subscribe(data => {
      console.log(data);
      this.form.controls['idAvance'].setValue(data[0].idAvance);
      this.idTrimestre.setValue(data[0].idTrimestre);
      this.idUsuarioAplicativo.setValue(data[0].idUsuarioAplicativo)
      this.idSolicitud.setValue(data[0].idSolicitud)
    });
  }

  modificarAvance() {
    this.avance.idAvance = this.form.value.idAvance;
    this.avance.idTrimestre = this.idTrimestre.value;
    this.avance.idUsuarioAplicativo = this.idUsuarioAplicativo.value;
    this.avance.idSolicitud = this.idSolicitud.value;
    this.avance.idUsuarioAplicativo_temp= this.generalService.getCookie("idFuncionario");
    this.avanceService.editarAvance(this.avance).subscribe(data =>
    console.log(data));
    this.router.navigate(['/dashboard/avance'])
  }

  getTrimestre() {
    this.trimestres = [];
    this.trimestreService.getTrimestre().subscribe((data: {}) => {
      console.log(data);
      this.trimestres = data;
    })
  }

  getUsuarioAplicativo() {
    this.usuariosAplicativos = [];
    this.funcionarioService.getFuncionario().subscribe((data: {}) => {
      console.log(data);
      this.usuariosAplicativos = data;
    })
  }

  getSolicitud() {
    this.solicitudes = [];
    this.solicitudService.getSolicitud().subscribe((data: {}) => {
      console.log(data);
      this.solicitudes = data;
    })
  }

}
