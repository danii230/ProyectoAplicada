import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/interfaces/sexo';
import { SexoService } from 'src/app/services/sexo.service';

@Component({
  selector: 'app-editar-sexo',
  templateUrl: './editar-sexo.component.html',
  styleUrls: ['./editar-sexo.component.css']
})
export class EditarSexoComponent implements OnInit {
  description : any; 
  
  constructor(private sexoService: SexoService) { 

  
  }

  ngOnInit(): void {
   this.loadSexo();
  }

  loadSexo(): void {

    this.sexoService.encontrarId('1').subscribe(data => {
      this.description = data.descripcion 
    });
  }


}
