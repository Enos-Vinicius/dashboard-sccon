import { BaseRecursoModel } from "./base-resource.model";

export class AuthRegister extends BaseRecursoModel {
    constructor(
        public acceptedTerm: [],
        public captchaValue: string,
        public user: {
          allowedIps: [],
          checkEmail: string,
          email: string,
          employment: any,
          name: string,
          organization: any,
          phone: string,
          workAddress: any,
          workFunction: any,
          workUnit: any
        }
    ){
        super();
    }
        
    static fromJson(jsonData: any): AuthRegister{ 
        return jsonData;
    }
}