import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContactameComponent } from './modal/form-contactame/form-contactame.component';
import { TranslateModule } from '@ngx-translate/core';


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
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class ContactModule {
}
