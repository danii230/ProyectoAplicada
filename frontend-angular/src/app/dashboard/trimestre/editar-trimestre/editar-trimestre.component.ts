import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Trimestre } from 'src/app/interfaces/trimestre';
import { TrimestreService } from 'src/app/services/trimestre.service';

@Component({
  selector: 'app-editar-trimestre',
  templateUrl: './editar-trimestre.component.html',
  styleUrls: ['./editar-trimestre.component.css']
})
export class EditarTrimestreComponent implements OnInit {

  descripcion: any;
  form: FormGroup;
  trimestre = new Trimestre();
  id: number;
  constructor(private trimestreService: TrimestreService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      idTrimestre: [''],
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.loadTrimestre(this.data.idTrimestre);


  }

  loadTrimestre(id: any): void {
    this.trimestreService.encontrarId(id).subscribe(data => {
      this.form.controls['idTrimestre'].setValue(data[0].idTrimestre);
      this.form.controls['descripcion'].setValue(data[0].descripcion);
    });
  }

  modificarTrimestre() {
   
    this.trimestre.idTrimestre= this.form.value.idTrimestre;
    this.trimestre.descripcion = this.form.value.descripcion;
    this.trimestreService.editarTrimestre(this.trimestre).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/trimestre'])
  }

}
