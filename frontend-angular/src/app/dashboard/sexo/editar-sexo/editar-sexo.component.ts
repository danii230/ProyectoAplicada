import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/interfaces/sexo';
import { SexoService } from 'src/app/services/sexo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-sexo',
  templateUrl: './editar-sexo.component.html',
  styleUrls: ['./editar-sexo.component.css']
})
export class EditarSexoComponent implements OnInit {
  descripcion: any;
  form: FormGroup;
  id: number;
  constructor(private sexoService: SexoService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idSexo'));

    this.loadSexo(this.id);

  }

  loadSexo(id: any): void {
    this.sexoService.encontrarId(id).subscribe(data => {
      this.descripcion = data[0].descripcion;
    });
  }

  modificarSexo() {
    let sexo = new Sexo();
    sexo.idSexo =this.id;
    sexo.descripcion = this.form.value.descripcion;
    this.sexoService.editarSexo(sexo).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/sexo'])
  }




}
