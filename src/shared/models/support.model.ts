import { BaseRecursoModel } from "./base-resource.model";

export class Support extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public appRefId?: string, 
        public nome?: string,
        public email?: string,
        public organizationName?: string,
        public fone?: string,
        public doubt?: string
    ){
        super();
    }
        
    static fromJson(jsonData: any): Support{ 
        return Object.assign(new Support(), jsonData);
    }
}