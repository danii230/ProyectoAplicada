import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Solicitud } from '../interfaces/solicitud';


const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {


  constructor(private http: HttpClient) { }

  public getSolicitud() {
    return this.http.get(endpoint + '/solicitud').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getSolicitud'))
    );
  }

  public ingresarSolicitud(solicitud: Solicitud): Observable<any> {
    const url: string = endpoint + '/solicitud';
    return this.http.post<any>(url, solicitud);

  }


  public delete(idSolicitud: any, idUsuarioAplicativo: any): Observable<any> {
    const url: string = endpoint + '/solicitud/' + idSolicitud + '/' + idUsuarioAplicativo;
    return this.http.delete<any>(url);
  }

  public editarFuncionario(solicitud: Solicitud): Observable<Solicitud> {
    const url: string = endpoint + '/solicitud/';
    return this.http.put<Solicitud>(url, solicitud);
  }

  public encontrarId(id): any {
    return this.http.get<any>(endpoint + '/solicitud/' + id).pipe(
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