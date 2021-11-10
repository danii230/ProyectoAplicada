import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Sexo } from 'src/app/interfaces/sexo';

const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SexoService {


  constructor(private http: HttpClient) { }

  listMantenimiento: Sexo[] = [
    {idSexo: '1', descripcion: 'Hombre'},
  
  ];

  public getSexo(){
   return this.listMantenimiento.slice();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private extractData(res: Response){
    let body = res;
    return body || {};

  }

}
