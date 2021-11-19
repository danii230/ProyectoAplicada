import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Avance } from '../interfaces/avance';

const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AvanceService {


  constructor(private http: HttpClient) { }

  public getAvance() {
    return this.http.get(endpoint + '/avance').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getAvance'))
    );
  }

  public ingresarAvance(avance: Avance): Observable<any> {
    const url: string = endpoint + '/avance';
    return this.http.post<any>(url, avance);

  }


  public delete(idAvance: any, idUsuarioAplicativo: any): Observable<any> {
    const url: string = endpoint + '/avance/' + idAvance + '/' + idUsuarioAplicativo;
    return this.http.delete<any>(url);
  }

  public editarAvance(avance: Avance): Observable<Avance> {
    const url: string = endpoint + '/avance/';
    return this.http.put<Avance>(url, avance);
  }

  public encontrarId(id): any {
    return this.http.get<any>(endpoint + '/avance/' + id).pipe(
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