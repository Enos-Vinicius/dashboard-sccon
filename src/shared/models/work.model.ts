import { BaseRecursoModel } from "./base-resource.model";

export class Work extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public label?: string
    ){
        super();
    }
        
    static fromJson(jsonData: any){ 
        return jsonData;
    }
}