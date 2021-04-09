import { Injectable, Injector } from '@angular/core';

import { CommonQuestions } from "../models/common-questions.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class CommonQuestionsService extends BaseRecursoService<CommonQuestions> {

  constructor(protected injector: Injector) { 
    super("/common-questions?pageSize=20&page=1&status=ACTIVE", injector, 'commonQuestions', CommonQuestions.fromJson);
  }

}