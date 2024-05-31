import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from "primeng/dropdown";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";

const myModulo = [
  DropdownModule,
  InputSwitchModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [myModulo]
})
export class PrimeNgModule { }
