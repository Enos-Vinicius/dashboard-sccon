import { Injectable, Injector } from '@angular/core';

import { ValidateEmail } from "../models/validate-email.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class ValidateEmailService extends BaseRecursoService<any> {

  constructor(protected injector: Injector) { 
    super("/users/validateRegister", injector, 'none', ValidateEmail.fromJson);
  }

}