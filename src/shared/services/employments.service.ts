import { Injectable, Injector } from '@angular/core';

import { Employments } from "../models/employments.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class EmploymentsService extends BaseRecursoService<Employments> {

  constructor(protected injector: Injector) { 
    super("/employments", injector, 'none', Employments.fromJson);
  }

}