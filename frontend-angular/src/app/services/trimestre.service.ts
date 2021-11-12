import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Sexo } from 'src/app/interfaces/sexo';
import { Trimestre } from '../interfaces/trimestre';

const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TrimestreService {


  constructor(private http: HttpClient) { }

  public getTrimestre(){
    return this.http.get(endpoint + '/trimestre').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getTrimestre'))
    );
  }

  public ingresarTrimestre(trimestre:Trimestre): Observable<any> {
    const url: string = endpoint + '/trimestre';
    return this.http.post<any>(url,trimestre);
 
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