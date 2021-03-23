import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './external-libs/primeng.module';
import { MaterialModule } from './external-libs/material.module';
import { PhoneValidatorMaskDirective } from './directivas/phone-mask.diretive';
import { FilterPipe } from './pipes/filter.pipe';
import { Components } from './components/components';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  declarations: [
    Components,
    PhoneValidatorMaskDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    MaterialModule,
    LaddaModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PhoneValidatorMaskDirective,
    PrimeNgModule,
    MaterialModule,
    FilterPipe,
    Components,
  ],
})
export class SharedModule { }
