import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoNewsComponent } from './info-news/info-news.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { RequestAccessComponent } from './request-access/request-access.component';

const routes: Routes = [
  { path: '', component: PageComponent, pathMatch: 'full' },
  { path: 'info-news', component: InfoNewsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/:type', component: LoginComponent},
  { path: 'request-access', component: RequestAccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
