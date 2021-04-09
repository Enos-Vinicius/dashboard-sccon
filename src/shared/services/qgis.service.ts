import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { City } from "../models/city.model";
import { AuthService } from './auth.service';
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class QGISService {

    protected http: HttpClient
    protected env = environment;
    protected auth: AuthService;

    constructor(protected injector: Injector) { 
        this.auth = injector.get(AuthService);
        this.http = injector.get(HttpClient);
    } 

    getByQGIS(id: number, apiPath: string): Observable<any>{
        const url = this.env.apis.pf + `${apiPath}/${id}`;
        const token = this.auth.getToken();
        if(token){
            return this.http.get(url,{
                headers: {
                    'Authorization': 'Bearer ' + token.access_token
                }
            })
        }
    }
  
}