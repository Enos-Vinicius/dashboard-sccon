import { Injectable, Injector } from '@angular/core';

import { Work } from "../models/work.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class WorkService extends BaseRecursoService<Work> {

  constructor(protected injector: Injector) { 
    super("/work_functions", injector, 'none', Work.fromJson);
  }

}