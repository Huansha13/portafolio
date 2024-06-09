import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './pages/contact/contact.component';
import {FooterModule} from "../footer/footer.module";
import {PrimeNgModule} from "../prime-ng/prime-ng.module";


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FooterModule,
    PrimeNgModule
  ]
})
export class ContactModule {
}
