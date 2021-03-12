import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoImagesMosaicsComponent } from './info-image-mosaics/info-image-mosaics.component';
import { InfoNewsComponent } from './info-news/info-news.component';
import { InfoSoftwareComponent } from './info-software/info-software.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { RequestAccessComponent } from './request-access/request-access.component';

const routes: Routes = [
  { path: '', component: PageComponent, pathMatch: 'full' },
  { path: 'info-news', component: InfoNewsComponent},
  { path: 'info-images', component: InfoImagesMosaicsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/:type', component: LoginComponent},
  { path: 'request-access', component: RequestAccessComponent},
  { path: 'design', component: InfoSoftwareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
