import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-editar-transaccion',
  templateUrl: './editar-transaccion.component.html',
  styleUrls: ['./editar-transaccion.component.css']
})
export class EditarTransaccionComponent implements OnInit {

  form: FormGroup;
  transaccion = new Transaccion();
  id: number;
  constructor(private transaccionService: TransaccionService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      idTransaccion: [''],
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.loadTransaccion(this.data.idTransaccion);

  }

  loadTransaccion(id: any): void {
    this.transaccionService.encontrarId(id).subscribe(data => {
      this.form.controls['idTransaccion'].setValue(data[0].idTransaccion);
      this.form.controls['descripcion'].setValue(data[0].descripcion);
    });
  }

  modificarTransaccion() {
    this.transaccion.idTransaccion= this.form.value.idTransaccion;
    this.transaccion.descripcion = this.form.value.descripcion;
    this.transaccionService.editarTransaccion(this.transaccion).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/transaccion'])
  }
}
