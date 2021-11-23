import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Avance } from 'src/app/interfaces/avance';
import { AvanceService } from 'src/app/services/avance.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { GeneralService } from 'src/app/services/general.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { TrimestreService } from 'src/app/services/trimestre.service';

@Component({
  selector: 'app-crear-avance',
  templateUrl: './crear-avance.component.html',
  styleUrls: ['./crear-avance.component.css']
})
export class CrearAvanceComponent implements OnInit {

  form: FormGroup;
  trimestres: any = [];
  usuariosAplicativos: any = [];
  solicitudes: any = [];
  idUsuarioAplicativo = new FormControl('', Validators.required);
  idTrimestre = new FormControl('', Validators.required);
  idSolicitud = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder, private avanceService: AvanceService,
    private router: Router, private generalService: GeneralService,private funcionarioService: FuncionarioService, 
    private solicitudService: SolicitudService, private trimestreService: TrimestreService) {
    this.form = this.fb.group({
      idAvance: [''],
      idUsuarioAplicativo: ['', Validators.required],
      idTrimestre: ['', Validators.required],
      idSolicitud: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.getSolicitud();
    this.getTrimestre();
    this.getUsuarioAplicativo();
  }

  agregarAvance() {
    let avance = new Avance();
    let temp= this.generalService.getCookie("idFuncionario");
    avance.idUsuarioAplicativo = temp;
    avance.idSolicitud = this.idSolicitud.value;
    avance.idTrimestre = this.idTrimestre.value;
    avance.finalizado = true; 
    this.avanceService.ingresarAvance(avance).subscribe(data =>
    console.log(data));
    this.router.navigate(['/dashboard/avance'])
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

  getUsuarioAplicativo() {
    this.usuariosAplicativos = [];
    this.funcionarioService.getFuncionario().subscribe((data: {}) => {
      console.log(data);
      this.usuariosAplicativos = data;
    })
  }
  getTrimestre() {
    this.trimestres = [];
    this.trimestreService.getTrimestre().subscribe((data: {}) => {
      console.log(data);
      this.trimestres = data;
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
