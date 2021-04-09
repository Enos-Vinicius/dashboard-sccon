import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { 

  }

  getStates() {
    return [
        { "id": 1, "name": "Acre" , "code":"AC"}, 
        { "id": 2, "name": "Alagoas", "code":"AL" }, 
        { "id": 4, "name": "Amapá" , "code":"AP"}, 
        { "id": 3, "name": "Amazonas" , "code":"AM"}, 
        { "id": 5, "name": "Bahia", "code":"BA" }, 
        { "id": 6, "name": "Ceará" , "code":"CE"}, 
        { "id": 7, "name": "Distrito Federal" , "code":"DF"}, 
        { "id": 8, "name": "Espírito Santo" , "code":"ES"}, 
        { "id": 9, "name": "Goiás" , "code":"GO"}, 
        { "id": 10, "name": "Maranhão", "code":"MA" }, 
        { "id": 13, "name": "Mato Grosso" , "code":"MT"}, 
        { "id": 12, "name": "Mato Grosso do Sul" , "code":"MS"}, 
        { "id": 11, "name": "Minas Gerais" , "code":"MG" }, 
        { "id": 14, "name": "Pará" , "code":"PA"}, 
        { "id": 15, "name": "Paraíba" , "code":"PB"}, 
        { "id": 18, "name": "Paraná" , "code":"PR"}, 
        { "id": 16, "name": "Pernambuco" , "code":"PE"}, 
        { "id": 17, "name": "Piauí" , "code":"PI"}, 
        { "id": 19, "name": "Rio de Janeiro", "code":"RJ" }, 
        { "id": 20, "name": "Rio Grande do Norte" , "code":"RN"}, 
        { "id": 23, "name": "Rio Grande do Sul" , "code":"RS"}, 
        { "id": 21, "name": "Rondônia" , "code":"RO"}, 
        { "id": 22, "name": "Roraima" , "code":"RR"}, 
        { "id": 24, "name": "Santa Catarina" , "code":"SC"}, 
        { "id": 26, "name": "São Paulo" , "code":"SP"}, 
        { "id": 25, "name": "Sergipe" , "code":"SE"}, 
        { "id": 27, "name": "Tocantins" , "code":"TO"}
    ];
  }
}