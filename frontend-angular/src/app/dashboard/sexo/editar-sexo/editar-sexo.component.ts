import { Component, OnInit } from '@angular/core';
import { SexoService } from 'src/app/services/sexo.service';

@Component({
  selector: 'app-editar-sexo',
  templateUrl: './editar-sexo.component.html',
  styleUrls: ['./editar-sexo.component.css']
})
export class EditarSexoComponent implements OnInit {
  
  constructor(private sexoService: SexoService) { }

  ngOnInit(): void {
  }

}
