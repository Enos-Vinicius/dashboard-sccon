import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaLoaderService,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { MaterialModule } from 'src/shared/external-libs/material.module';
import { SharedModule } from 'src/shared/shared.module';

import { createTranslateLoader } from '../app.module';
import { NavbarModule } from '../common/navbar/navbar.module';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { ImagesMosaicsComponent } from './images-mosaics/images-mosaics.component';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { InfoImagesMosaicsComponent } from './info-image-mosaics/info-image-mosaics.component';
import { InfoNewsComponent } from './info-news/info-news.component';
import { InfoSoftwareComponent } from './info-software/info-software.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { PlatformComponent } from './platform/platform.component';
import { RequestAccessComponent } from './request-access/request-access.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    MainComponent,
    InfoSoftwareComponent,
    KnowMoreComponent,
    NewsComponent,
    ImagesMosaicsComponent,
    InfoNewsComponent,
    InfoImagesMosaicsComponent,
    RequestAccessComponent,
    InfoDashboardComponent,
    PlatformComponent,
    CommonQuestionsComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RecaptchaModule,
    NavbarModule,
    RecaptchaFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    LandingPageRoutingModule
  ],
  exports: [
    RecaptchaModule,
    RecaptchaFormsModule,
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
export class LandingPageModule { }
