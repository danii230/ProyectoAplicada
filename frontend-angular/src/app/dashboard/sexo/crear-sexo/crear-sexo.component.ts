import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sexo } from 'src/app/interfaces/sexo';
import { SexoService } from 'src/app/services/sexo.service';

@Component({
  selector: 'app-crear-sexo',
  templateUrl: './crear-sexo.component.html',
  styleUrls: ['./crear-sexo.component.css']
})
export class CrearSexoComponent implements OnInit {

  form: FormGroup;
  sexo: Sexo
  constructor(private fb: FormBuilder, private sexoService: SexoService) {
    this.form = this.fb.group({
      idSexo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  agregarSexo() {
    console.log(this.form.value.descripcion)
    this.sexo = this.form.value.descripcion
    console.log(this.sexo)
    this.sexoService.ingresarSexo(this.sexo).subscribe(data=>
      console.log(data));
  }

}
