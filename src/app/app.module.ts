
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import { CoreModule } from './core/core.module';
import { NavbarModule } from './common/navbar/navbar.module';
import { LaddaModule } from 'angular2-ladda';

registerLocaleData(localePt);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '-lang.json?cb=' + new Date().getTime());
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    NavbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LaddaModule.forRoot({
      style: "expand-left",
      spinnerSize: 30,
      spinnerLines: 12
    }),

  ],
  providers: [
    TranslateService
  ],
  exports: [
    TranslateModule,
    NavbarModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

