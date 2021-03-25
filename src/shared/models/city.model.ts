import { BaseRecursoModel } from "./base-resource.model";

export class City extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public name?: string,
        public boundaryBox?: boolean
    ){
        super();
    }
        
    static fromJson(jsonData: any){ 
        return jsonData;
    }
}