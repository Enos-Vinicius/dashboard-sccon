import { BaseRecursoModel } from '../models/base-resource.model';
import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

export abstract class BaseRecursoService<T extends BaseRecursoModel> {
    protected http: HttpClient
    protected env = environment;

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected prop: string,
        protected jsonDataToResourceFn: (jsonData: any) => T
    ) {
        this.http = injector.get(HttpClient);
     }

    getAll(): Observable<T[]> {
        return this.http.get(this.env.apis.pf + this.apiPath).pipe(
            map(this.jsonDataToRecursos.bind(this)),
            catchError(this.handleError)
        )
    }

    getAllProp(): Observable<T[]> {
        return this.http.get(this.env.apis.pf + this.apiPath).pipe(
            map(this.jsonDataToRecursos.bind(this)),
            catchError(this.handleError)
        )
    }

    getById(id: number): Observable<T>{
        const url = this.env.apis.pf + `${this.apiPath}/${id}`;

        return this.http.get(url).pipe(
            map(this.jsonDataToRecurso.bind(this)), 
            catchError(this.handleError)
        )
    }

    getByString(description: string): Observable<T>{
        const url = this.env.apis.pf + `${this.apiPath}/${description}`;

        return this.http.get(url).pipe(
            map(this.jsonDataToRecurso.bind(this)),
            catchError(this.handleError)
        )
    }

    create(recurso: T): Observable<T> {
        return this.http.post(this.env.apis.pf + this.apiPath, recurso, {headers: {
            "Content-Type": "application/json;charset=utf-8",
          }}).pipe(
            catchError(this.handleError),
            map(this.jsonDataToRecurso)
        )
    }

    update(recurso: T): Observable<T> {
        const url = this.env.apis.pf + `${this.apiPath}/${recurso.id}`;
        return this.http.put(url, recurso).pipe(
            catchError(this.handleError),
            map(() => recurso)
        )
    }

    delete(id: number): Observable<any>{
        const url = `${this.apiPath}/${id}`;
        return this.http.delete(url).pipe(
            catchError(this.handleError),
            map(() => null)
        )
    }
  

  //PROTECTED METHODS

  protected jsonDataToRecursos(jsonData: any[]): T[] {
    const recursos: T[] = [];
       
    if(this.prop != 'none') {
        jsonData[this.prop].forEach(
            element => recursos.push(this.jsonDataToResourceFn(element))            
        );
    } else {
        jsonData.forEach(
            element => recursos.push(this.jsonDataToResourceFn(element))
        );
    }
    return recursos;
  }

  protected jsonDataToRecurso(jsonData: any): T{
    if(this.prop != 'none') {
        return this.jsonDataToResourceFn(jsonData[this.prop]);
    } else {
        return this.jsonDataToResourceFn(jsonData);
    }
  }

  protected handleError(error: any): Observable<any>{
    console.log("ERROR NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}