import { BaseRecursoModel } from "./base-resource.model";

export class ValidateEmail extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public creationDate?: Date, 
        public eulaFile?: string,
        public name?: string,
        public updateDate?: Date
    ){
        super();
    }
        
    static fromJson(jsonData: any): ValidateEmail{ 
        return Object.assign(new ValidateEmail(), jsonData);
    }
}