import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Funcionario } from '../interfaces/funcionario';


const endpoint = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  constructor(private http: HttpClient) { }

  public getFuncionario(){
    return this.http.get(endpoint + '/funcionario').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getFuncionario'))
    );
  }

  public ingresarFuncionario(funcionario:Funcionario): Observable<any> {
    const url: string = endpoint + '/funcionario';
    console.log(funcionario);
    return this.http.post<any>(url,funcionario);
 
  }

  public delete(idFuncionario): Observable<any>{
    const url: string = endpoint + '/funcionario/';
    return this.http.delete<any>(url +idFuncionario);
}

public editarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
  console.log(funcionario);
  const url: string = endpoint + '/funcionario/';
  return this.http.put<Funcionario>(url, funcionario);
}

public encontrarId(id): any {
  return this.http.get<any>(endpoint + '/funcionario/' + id).pipe(
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

  private extractData(res: Response){
    let body = res;
    return body || {};

  }
  }