import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { PageComponent } from './page/page.component';
import { MaterialModule } from 'src/shared/material.module';
import { MainComponent } from './main/main.component';
import { InfoSoftwareComponent } from './info-software/info-software.component';
import { KnowMoreComponent } from './know-more/know-more.component';


@NgModule({
  declarations: [
    PageComponent,
    MainComponent,
    InfoSoftwareComponent,
    KnowMoreComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
