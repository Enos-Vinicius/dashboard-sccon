import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoImagesMosaicsComponent } from './info-image-mosaics/info-image-mosaics.component';
import { InfoNewsComponent } from './info-news/info-news.component';
import { InfoSoftwareComponent } from './info-software/info-software.component';
import { LandingPageComponent } from './landing-page.component';
import { RequestAccessComponent } from './request-access/request-access.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'info-news', component: InfoNewsComponent },
  { path: 'info-images', component: InfoImagesMosaicsComponent },
  { path: 'design', component: InfoSoftwareComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
