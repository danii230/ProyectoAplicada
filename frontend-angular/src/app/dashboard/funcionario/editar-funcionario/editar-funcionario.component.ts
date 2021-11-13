import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  descripcion: any;
  form: FormGroup;
  id: number;
  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idFuncionario'));

    this.loadFuncionario(this.id);

  }

  loadFuncionario(id: any): void {
    this.funcionarioService.encontrarId(id).subscribe(data => {
      this.descripcion = data[0].descripcion;
    });
  }

  modificarFuncionario() {
    let funcionario = new Funcionario();
    funcionario.idFuncionario =this.id;
    funcionario.nombre = this.form.value.nombre;
    this.funcionarioService.editarFuncionario(funcionario).subscribe(data =>
      console.log(data));
    this.router.navigate(['/dashboard/funcionario'])
  }
}
