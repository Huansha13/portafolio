import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMainComponent } from './page/nav-main/nav-main.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavMainComponent],
  exports: [
    NavMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavBarModule { }
