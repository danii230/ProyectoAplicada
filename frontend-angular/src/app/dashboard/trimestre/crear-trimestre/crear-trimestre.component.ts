import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trimestre } from 'src/app/interfaces/trimestre';
import { TrimestreService } from 'src/app/services/trimestre.service';

@Component({
  selector: 'app-crear-trimestre',
  templateUrl: './crear-trimestre.component.html',
  styleUrls: ['./crear-trimestre.component.css']
})
export class CrearTrimestreComponent implements OnInit {
  form: FormGroup;
  // sexo: Sexo;
  constructor(private fb: FormBuilder, private trimestreService: TrimestreService) {
    this.form = this.fb.group({
      idSexo: [''],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
 
  agregarTrimestre() {
    let trimestre = new Trimestre();
    trimestre.descripcion = this.form.value.descripcion;
    this.trimestreService.ingresarTrimestre(trimestre).subscribe(data=>
    console.log(data));
  }
}
