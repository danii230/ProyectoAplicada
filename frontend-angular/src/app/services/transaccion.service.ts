import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Transaccion } from '../interfaces/transaccion';


const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {


  constructor(private http: HttpClient) { }

  public getTransaccion(){
    return this.http.get(endpoint + '/transaccion').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getTransaccion'))
    );
  }

  public ingresarTransaccion(transaccion:Transaccion): Observable<any> {
    const url: string = endpoint + '/transaccion';
    return this.http.post<any>(url,transaccion);
 
  }

  public delete(idTrimestre): Observable<any>{
    const url: string = endpoint + '/trimestre/';
    return this.http.delete<any>(url +idTrimestre);
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