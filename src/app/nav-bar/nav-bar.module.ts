import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMainComponent } from './page/nav-main/nav-main.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [NavMainComponent],
  exports: [
    NavMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ]
})
export class NavBarModule { }
