import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { PageComponent } from './page/page.component';
import { MaterialModule } from 'src/shared/external-libs/material.module';
import { MainComponent } from './main/main.component';
import { InfoSoftwareComponent } from './info-software/info-software.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { ResultsComponent } from './results/results.component';

import { NewsComponent } from './news/news.component';
import { ImagesMosaicsComponent } from './images-mosaics/images-mosaics.component';
import { InfoNewsComponent } from './info-news/info-news.component';
import { LoginComponent } from './login/login.component';
import { WhoCanAccessComponent } from './who-can-access/who-can-access.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { PlatformComponent } from './platform/platform.component';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    PageComponent,
    MainComponent,
    InfoSoftwareComponent,
    KnowMoreComponent,
    ResultsComponent,
    NewsComponent,
    ImagesMosaicsComponent,
    InfoNewsComponent,
    LoginComponent,
    WhoCanAccessComponent,
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
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    LandingPageRoutingModule
  ],
  exports: []
})
export class LandingPageModule { }
