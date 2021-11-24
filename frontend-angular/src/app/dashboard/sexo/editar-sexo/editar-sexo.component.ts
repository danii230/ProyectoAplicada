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
  descripcion: any;
  form: FormGroup;
  id: number;
  sexo = new Sexo();
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private sexoService: SexoService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('idSexo'));
    console.log(this.id);

    this.loadSexo(this.data.idSexo);

  }

  loadSexo(id: any): void {
    this.sexoService.encontrarId(id).subscribe(data => {
      this.descripcion = data[0].descripcion;


      //Llenar objeto
      this.sexo.idSexo =data[0].idSexo;
      this.sexo.descripcion = data[0].descripcion;
      console.log(this.sexo);

    });
  }

  modificarSexo() {
    if(this.form.value.descripcion){
    this.sexo.descripcion = this.form.value.descripcion;}
    console.log(this.sexo);
    this.sexoService.editarSexo(this.sexo).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/sexo'])
  }
}
