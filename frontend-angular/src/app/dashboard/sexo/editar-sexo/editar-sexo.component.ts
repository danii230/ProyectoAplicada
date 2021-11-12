import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Sexo } from 'src/app/interfaces/sexo';
import { SexoService } from 'src/app/services/sexo.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-sexo',
  templateUrl: './editar-sexo.component.html',
  styleUrls: ['./editar-sexo.component.css']
})
export class EditarSexoComponent implements OnInit {
  descripcion : any; 
  form: FormGroup;
  id: number;
  constructor(private sexoService: SexoService, private route: ActivatedRoute,
    private router: Router) { 

  
  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('idSexo'));

    this.loadSexo(this.id);
    
  }

  loadSexo(id : any): void {

   this.sexoService.encontrarId(id).subscribe(data => {
      this.descripcion = data.descripcion 
    });

  }



}
