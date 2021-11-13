import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Departamento } from '../interfaces/departamento';


const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {


  constructor(private http: HttpClient) { }

//   public getDepartamento(){
//     return this.http.get(endpoint + '/departamento').pipe(
//       map(this.extractData),
//       catchError(this.handleError<any>('getDepartamento'))
//     );
//   }

//   public ingresarDepartamento(departamento:Departamento): Observable<any> {
//     const url: string = endpoint + '/departamento';
//     return this.http.post<any>(url,departamento);
 
//   }

//   public delete(idDepartamento): Observable<any>{
//     const url: string = endpoint + '/departamento/';
//     return this.http.delete<any>(url +idDepartamento);
// }

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


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  