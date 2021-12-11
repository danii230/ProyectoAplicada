import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/interfaces/sexo';
import { SexoService } from 'src/app/services/sexo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-editar-sexo',
  templateUrl: './editar-sexo.component.html',
  styleUrls: ['./editar-sexo.component.css']
})

export class EditarSexoComponent implements OnInit {
  form: FormGroup;
  sexo = new Sexo();
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private sexoService: SexoService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      idSexo: [''],
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.loadSexo(this.data.idSexo);

  }

  loadSexo(id: any): void {
    this.sexoService.encontrarId(id).subscribe(data => {
      this.form.controls['idSexo'].setValue(data[0].idSexo);
      this.form.controls['descripcion'].setValue(data[0].descripcion);
    });
  }

  modificarSexo() {
    this.sexo.idSexo= this.form.value.idSexo;
    this.sexo.descripcion = this.form.value.descripcion;
    this.sexoService.editarSexo(this.sexo).subscribe(data =>
    console.log(data));
    window.location.reload();
  
}
}