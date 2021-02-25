import { BaseRecursoModel } from "./base-resource.model";

export class Support extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public nome?: string,
        public email?: string,
        public instituicao?: string,
        public telefone?: string,
        public mensagen?: string
    ){
        super();
    }
        
    static fromJson(jsonData: any): Support{ 
        return Object.assign(new Support(), jsonData);
    }
}