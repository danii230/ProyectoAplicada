import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-crear-transaccion',
  templateUrl: './crear-transaccion.component.html',
  styleUrls: ['./crear-transaccion.component.css']
})
export class CrearTransaccionComponent implements OnInit {

  form: FormGroup;
  // sexo: Sexo;
  constructor(private fb: FormBuilder, private transaccionService: TransaccionService) {
    this.form = this.fb.group({
      idSexo: [''],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
 
  agregarTransaccion() {
    let transaccion = new Transaccion();
    transaccion.descripcion = this.form.value.descripcion;
    this.transaccionService.ingresarTransaccion(transaccion).subscribe(data=>
    console.log(data));
  }

}
