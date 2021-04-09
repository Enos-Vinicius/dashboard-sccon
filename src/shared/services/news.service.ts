import { Injectable, Injector } from '@angular/core';

import { NewsModel } from "../models/news.model";
import { BaseRecursoService } from "./base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseRecursoService<NewsModel> {

  constructor(protected injector: Injector) { 
    super("/news?pageSize=30&page=1&status=ACTIVE&orderBy=SOURCE_DATE&asc=false", injector, 'news', NewsModel.fromJson);
  }

}