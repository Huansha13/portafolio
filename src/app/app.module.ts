import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkModule } from './work/work.module';

// External
import {NavBarModule} from './nav-bar/nav-bar.module';
import { ContactModule } from './contact/contact.module';
import { PagesModule } from './resume/pages.module';
import {FooterModule} from './footer/footer.module';

//model external

import {environment} from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// Para @angular/localize
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      WorkModule,
      ContactModule,
      PagesModule,
      FooterModule,
      NavBarModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

// Para ngx-translate/core
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
