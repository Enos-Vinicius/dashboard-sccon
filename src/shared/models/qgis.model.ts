import { BaseRecursoModel } from "./base-resource.model";

export class QGIS extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public fixedUser?: boolean, 
        public password?: string,
        public userName?: string,
        public validUntil?: string,
    ){
        super();
    }

}