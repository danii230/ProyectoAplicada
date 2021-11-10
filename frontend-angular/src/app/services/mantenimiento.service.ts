import { Injectable } from '@angular/core';
import { mantenimientos } from '../interfaces/mantenimientos';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {


  constructor(private http: HttpClient) { }

  public getSexo(){
    return this.http.get(endpoint + '/sexo').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getSexo'))
    );
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
