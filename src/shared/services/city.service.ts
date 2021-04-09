import { Injectable, Injector } from '@angular/core';

import { City } from "../models/city.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseRecursoService<any> {

  constructor(protected injector: Injector) { 
    super("/locals/state", injector, 'none', City.fromJson);
  }

}