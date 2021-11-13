import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-editar-transaccion',
  templateUrl: './editar-transaccion.component.html',
  styleUrls: ['./editar-transaccion.component.css']
})
export class EditarTransaccionComponent implements OnInit {

  descripcion: any;
  form: FormGroup;
  id: number;
  constructor(private transaccionService: TransaccionService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idTransaccion'));

    this.loadTransaccion(this.id);

  }

  loadTransaccion(id: any): void {
    this.transaccionService.encontrarId(id).subscribe(data => {
      this.descripcion = data[0].descripcion;
    });
  }

  modificarTransaccion() {
    let transaccion = new Transaccion();
    transaccion.idTransaccion =this.id;
    transaccion.descripcion = this.form.value.descripcion;
    this.transaccionService.editarTransaccion(transaccion).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/transaccion'])
  }
}
