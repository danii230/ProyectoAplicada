import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sexo } from 'src/app/interfaces/sexo';
import { SexoService } from 'src/app/services/sexo.service';
import { Bitacora } from 'src/app/interfaces/bitacora';

@Component({
  selector: 'app-crear-sexo',
  templateUrl: './crear-sexo.component.html',
  styleUrls: ['./crear-sexo.component.css']
})
export class CrearSexoComponent implements OnInit {

  form: FormGroup;
  // sexo: Sexo;

  constructor(private fb: FormBuilder, private sexoService: SexoService,
    private router: Router) {
    this.form = this.fb.group({
      idSexo: [''],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  agregarSexo() {
    let sexo = new Sexo();
    sexo.descripcion = this.form.value.descripcion;
    this.sexoService.ingresarSexo(sexo).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/sexo'])
  }

}