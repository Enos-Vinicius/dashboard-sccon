import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './external-libs/primeng.module';
import { MaterialModule } from './external-libs/material.module';
import { PhoneValidatorMaskDirective } from './directivas/phone-mask.diretive';
import { FilterPipe } from './pipes/filter.pipe';
import { Components } from './components/components';
import { LaddaModule } from 'angular2-ladda';
import { InfoRegisterComponent } from './components/info-register/info-register.component';
import { HighlightDirective } from './directivas/highlight.diretive';
import { QgisComponent } from './components/qgis/qgis.component';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaLoaderService,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';

@NgModule({
  declarations: [
    Components,
    PhoneValidatorMaskDirective,
    HighlightDirective,
    FilterPipe,
    InfoRegisterComponent,
    QgisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    PrimeNgModule,
    MaterialModule,
    LaddaModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PhoneValidatorMaskDirective,
    HighlightDirective,
    PrimeNgModule,
    MaterialModule,
    FilterPipe,
    RecaptchaModule,
    RecaptchaFormsModule,
    Components,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Lc-XM8ZAAAAAMaf1-pwWNfwk7rDHKHCdKzoIhD8',
      } as RecaptchaSettings,
    },
    RecaptchaLoaderService
  ]
})
export class SharedModule { }
