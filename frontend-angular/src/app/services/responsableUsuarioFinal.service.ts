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
export class ResponsableUsuarioFinalService {


  constructor(private http: HttpClient) { }


  public getResponsableusuarioFinal() {
    return this.http.get(endpoint + '/responsableUsuarioFinal').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getResponsableUsuarioFinal'))
    );
  }

  public ingresarResponsableUsuarioFinal(responsableUsuarioFinal: ResponsableUsuarioFinalService): Observable<any> {
    const url: string = endpoint + '/responsableUsuarioFinal';
    return this.http.post<any>(url, responsableUsuarioFinal);

  }

  public delete(idResponsableUsuarioFinal): Observable<any> {
    const url: string = endpoint + '/responsableUsuarioFinal/';
    return this.http.delete<any>(url + idResponsableUsuarioFinal);
  }


  public editarResponsableUsuarioFinal(responsableUsuarioFinal: ResponsableUsuarioFinalService): Observable<ResponsableTI> {
    const url: string = endpoint + '/responsableUsuarioFinal/';
    return this.http.put<ResponsableTI>(url, responsableUsuarioFinal);
  }

  public encontrarId(id): any {
    return this.http.get<any>(endpoint + '/responsableUsuarioFinal/' + id).pipe(
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
