import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './pages/footer/footer.component';
import {RouterModule} from '@angular/router';
import {RedSocialComponent} from "./pages/red-social/red-social.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    FooterComponent,
    RedSocialComponent
  ],
  exports: [
    FooterComponent,
    RedSocialComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ]
})
export class FooterModule {
}
