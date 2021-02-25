import { Injectable, Injector } from '@angular/core';

import { Support } from "../models/support.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class SupportService extends BaseRecursoService<Support> {

  constructor(protected injector: Injector) { 
    super("/doubtemail/deforestation", injector, 'none', Support.fromJson);
  }

}