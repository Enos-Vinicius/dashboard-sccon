import { BaseRecursoModel } from "./base-resource.model";

export class Token extends BaseRecursoModel {
    constructor(
        public access_token?: string,
        public token_type?: string,
        public iss?: string,
        public sub?: string,
        public name?: string,
        public exp?: number,
        public iat?: number,
        public roles?: string[],
        public elearning_url?: string,
        public gama_key?: string,
        public gama_expiration_date?: number,
    ){
        super();
        this.gama_key = access_token;
        this.gama_expiration_date = exp;
    }

    static fromJson(jsonData: any): Token{
        return Object.assign(new Token(), jsonData);
    }
}
