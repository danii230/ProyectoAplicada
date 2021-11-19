import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Form, FormGroup } from '@angular/forms';
import { ResponsableTI } from '../interfaces/responsableTI';


const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ResponsableTIService {


  constructor(private http: HttpClient) { }


  public getResponsableTI() {
    return this.http.get(endpoint + '/responsableTI').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getResponsableTI'))
    );
  }

  public ingresarResponsableTI(responsableTI: ResponsableTI): Observable<any> {
    const url: string = endpoint + '/responsableTI';
    return this.http.post<any>(url, responsableTI);

  }

  public delete(idResponsableTI): Observable<any> {
    const url: string = endpoint + '/responsableTI/';
    return this.http.delete<any>(url + idResponsableTI);
  }


  public editarResponsableTI(responsableTI: ResponsableTI): Observable<ResponsableTI> {
    const url: string = endpoint + '/responsableTI/';
    return this.http.put<ResponsableTI>(url, responsableTI);
  }

  public encontrarId(id): any {
    return this.http.get<any>(endpoint + '/responsableTI/' + id).pipe(
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
