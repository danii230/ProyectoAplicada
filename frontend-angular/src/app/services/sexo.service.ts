import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Sexo } from '../interfaces/sexo';
import { Form, FormGroup } from '@angular/forms';


const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SexoService {


  constructor(private http: HttpClient) { }


  public getSexo() {
    return this.http.get(endpoint + '/sexo').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getSexo'))
    );
  }

  public ingresarSexo(sexo: Sexo): Observable<any> {
    const url: string = endpoint + '/sexo';
    return this.http.post<any>(url, sexo);

  }

  public delete(idSexo): Observable<any> {
    const url: string = endpoint + '/sexo/';
    return this.http.delete<any>(url + idSexo);
  }


  public editarSexo(sexo: Sexo): Observable<Sexo> {
    const url: string = endpoint + '/sexo/';
    return this.http.put<Sexo>(url, sexo);
  }

  public encontrarId(id): any {
    return this.http.get<any>(endpoint + '/sexo/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('encontrarId'))
    );

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};

  }

}
