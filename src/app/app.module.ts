import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkModule } from './work/work.module';

// External
import { NgxSpinnerModule } from 'ngx-spinner';
import {NavBarModule} from './nav-bar/nav-bar.module';
import { ContactModule } from './contact/contact.module';
import { PagesModule } from './resume/pages.module';
import {FooterModule} from './footer/footer.module';

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
        NgxSpinnerModule,
        NavBarModule,
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
