import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BitacoraAuditoriaService {


  constructor(private http: HttpClient) { }

  public getBitacora() {
    return this.http.get(endpoint + '/bitacoraAuditoria').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getBitacoraAuditoria'))
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