import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'cadastro', loadChildren: () => import('./common/cadastro/cadastro.module').then(m => m.CadastroModule) },
/*   { path: 'dashboard', loadChildren: () => import('./core/dashboard/dashboard.module').then(m => m.DashboardModule) }, */
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
