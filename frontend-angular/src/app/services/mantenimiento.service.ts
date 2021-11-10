import { Injectable } from '@angular/core';
import { mantenimientos } from '../interfaces/mantenimientos';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  listMantenimiento: mantenimientos[] = [
    {id: 1, descripcion: 'Hombre'},
  
  ];
  constructor() { }

  getMantenimiento(){
    return this.listMantenimiento.slice();
  }

  eliminarSexo(index: number){
this.listMantenimiento.slice(index, 1);
  }
}
