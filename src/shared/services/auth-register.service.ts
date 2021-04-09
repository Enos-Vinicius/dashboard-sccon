import { Injector, Injectable } from '@angular/core';
import { AuthRegister } from '../models/auth-register.model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService extends BaseRecursoService<AuthRegister>{

  constructor(protected injector: Injector) {
    super("/users/auto_register", injector, 'none', AuthRegister.fromJson);
  }
}
