import { BaseRecursoModel } from "./base-resource.model";

export class ValidateCpf extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public creationDate?: Date, 
        public eulaFile?: string,
        public name?: string,
        public updateDate?: Date
    ){
        super();
    }
        
    static fromJson(jsonData: any): ValidateCpf{ 
        return Object.assign(new ValidateCpf(), jsonData);
    }
}