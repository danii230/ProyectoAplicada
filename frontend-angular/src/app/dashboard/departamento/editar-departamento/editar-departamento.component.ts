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
  form: FormGroup;
  departamento = new Departamento();
  id: number;
  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      idDepartamento: [''],
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idDepartamento'));

    this.loadDepartamento(this.id);

  }

  loadDepartamento(id: any): void {
    this.departamentoService.encontrarId(id).subscribe(data => {
      this.form.controls['idDepartamento'].setValue(data[0].idDepartamento);
      this.form.controls['descripcion'].setValue(data[0].descripcion);

    });
  }

  modificarDepartamento() {
    this.departamento.idDepartamento= this.form.value.idDepartamento;
    this.departamento.descripcion = this.form.value.descripcion;
    this.departamentoService.editarDepartamento(this.departamento).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/departamento'])
  }

}
