import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterModule } from "../footer/footer.module";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { ReactiveFormsModule } from '@angular/forms';
import { FormContactameComponent } from './modal/form-contactame/form-contactame.component';


@NgModule({
  declarations: [
    ContactComponent,
    FormContactameComponent
  ],
  exports: [
    FormContactameComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class ContactModule {
}
