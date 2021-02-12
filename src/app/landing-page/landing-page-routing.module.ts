import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoNewsComponent } from './info-news/info-news.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'landing-page/info-news', component: InfoNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
