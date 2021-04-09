import { BaseRecursoModel } from "./base-resource.model";
import { NewsItens } from "./news-itens.model";

export class NewsModel extends BaseRecursoModel {
    constructor(
        public news?: NewsItens,
        public maxRegister?: number,
        public minRegister?: number,
        public page?: number,
        public total?: number

    ){
        super();
    }
    
    static fromJson(jsonData: any): NewsItens{ 
        return Object.assign(new NewsItens(), jsonData);
    }
}