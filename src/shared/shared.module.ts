import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './external-libs/primeng.module';
import { MaterialModule } from './external-libs/material.module';
import { PhoneValidatorMaskDirective } from './directivas/phone-mask.diretive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    PhoneValidatorMaskDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PhoneValidatorMaskDirective,
    PrimeNgModule,
    MaterialModule,
    FilterPipe
  ]
})
export class SharedModule { }