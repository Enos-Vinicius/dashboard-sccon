
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import { CoreModule } from './core/core.module';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

  ],
  providers: [
    TranslateService
  ],
  exports: [
    TranslateModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

