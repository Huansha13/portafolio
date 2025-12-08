import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkModule } from './work/work.module';

// External
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ContactModule } from './contact/contact.module';
import { PagesModule } from './resume/pages.module';
import { FooterModule } from './footer/footer.module';

//model external


import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RemoteTranslationLoaderFactory } from './core/utils/remote-translation-loader';

// Para @angular/localize
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PrimeNgModule } from "./prime-ng/prime-ng.module";
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SeasonalThemeService } from './core/utils/seasonal-theme.service';

registerLocaleData(localeEs);

export function initializeApp(seasonalTheme: SeasonalThemeService) {
  return () => seasonalTheme;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    WorkModule,
    ContactModule,
    PagesModule,
    FooterModule,
    NavBarModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    DialogService,
    MessageService,
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SeasonalThemeService],
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Para ngx-translate/core con traducciones remotas
export function HttpLoaderFactory(http: HttpClient) {
  return RemoteTranslationLoaderFactory(http);
}
