import { Injectable, Injector } from '@angular/core';

import { ValidateCpf } from "../models/validate-cpf.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class ValidateCpfService extends BaseRecursoService<any> {

  constructor(protected injector: Injector) { 
    super("/users/validateRegister/", injector, 'none', ValidateCpf.fromJson);
  }

}