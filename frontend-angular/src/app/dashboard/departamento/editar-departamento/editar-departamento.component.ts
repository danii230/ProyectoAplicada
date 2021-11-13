import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DepartamentoComponent } from '../departamento.component';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  descripcion: any;
  form: FormGroup;
  id: number;
  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idDepartamento'));

    this.loadDepartamento(this.id);

  }

  loadDepartamento(id: any): void {
    this.departamentoService.encontrarId(id).subscribe(data => {
      this.descripcion = data[0].descripcion;
    });
  }

  modificarDepartamento() {
    let departamento = new Departamento();
    departamento.idDepartamento =this.id;
    departamento.descripcion = this.form.value.descripcion;
    this.departamentoService.editarDepartamento(departamento).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/departamento'])
  }

}
