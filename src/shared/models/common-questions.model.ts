import { BaseRecursoModel } from "./base-resource.model";
import { QuestionsItens } from "./questions-itens.model";

export class CommonQuestions extends BaseRecursoModel {
    constructor(
        public commonQuestions?: QuestionsItens,
        public maxRegister?: number,
        public minRegister?: number,
        public page?: number,
        public total?: number

    ){
        super();
    }
    
    static fromJson(jsonData: any): CommonQuestions{ 
        return Object.assign(new CommonQuestions(), jsonData);
    }
}