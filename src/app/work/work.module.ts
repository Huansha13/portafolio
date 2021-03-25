import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import {NavBarModule} from '../nav-bar/nav-bar.module';
import {NgxWhastappButtonModule} from 'ngx-whatsapp-button';
import {FooterModule} from '../footer/footer.module';



@NgModule({
  declarations: [BodyComponent],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    NgxWhastappButtonModule,
    FooterModule,
  ]

})
export class WorkModule { }
